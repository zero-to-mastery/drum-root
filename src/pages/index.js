import React, { useState, useEffect } from 'react';
import Slider from 'react-input-slider';
import fetch from 'isomorphic-unfetch';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Error from '../Components/Error';
import DrumPad from '../Components/DrumPad';
import SoundUploader from '../Components/SoundUploader';
import TimeSignature from '../Components/TimeSignature/timeSignature';
import { useInterval, auth } from '../utils/common-functions';
import {
  getOscillator,
  createMetronomeOscillator,
  createMetronomeOscillatorB1
} from '../utils/sounds';

const Home = ({ originalLayout, error }) => {
  const [tempo, setTempo] = useState(100);
  const [play, setPlay] = useState(false);
  const [count, setCount] = useState(1);
  const [audioCtx, setAudioCtx] = useState();
  const [metronome, setMetronome] = useState(false);
  const [layout, setLayout] = useState(originalLayout);
  const [beatsMeasure, setBeatsMeasure] = useState(4);
  const [beatDivision, setBeatDivision] = useState(4);

  useInterval(() => {
    if (play) {
      playNote();
    }
  }, 1000 * (60 / tempo));

  useEffect(() => {
    setAudioCtx(new (window.AudioContext || window.webkitAudioContext)());
    return clearInterval(useInterval);
  }, []);

  useEffect(() => {
    if (layout[0].beats.length === beatsMeasure) return;
    const newLayout = [...layout];
    validateBeats(newLayout);
  }, [beatsMeasure]);

  const onPlayButtonClick = active => {
    if (!active) {
      setCount(1);
    }
    setPlay(active);
  };

  const validateBeats = layout => {
    let beatLength = layout[0].beats.length;
    while (!Number.isInteger(beatLength / beatsMeasure)) {
      // eslint-disable-next-line no-loop-func
      layout.forEach(row => {
        if (beatLength < beatsMeasure) {
          row.beats.push(false);
        } else {
          row.beats.pop();
        }
      });
      beatLength = layout[0].beats.length;
    }
    return setLayout(layout);
  };

  const updateBeats = (layout, remove) => {
    layout.forEach(row => {
      for (let i = beatsMeasure; i > 0; i--) {
        if (remove) {
          row.beats.pop();
        } else {
          row.beats.push(false);
        }
      }
    });
    return setLayout(layout);
  };

  const swapBeat = (rowNum, beatNum) => {
    const newLayout = [...layout];
    newLayout[rowNum].beats[beatNum] = !layout[rowNum].beats[beatNum];
    setLayout(newLayout);
  };

  const addNewBeat = () => {
    const newLayout = [...layout];
    if (newLayout[0].beats.length === 12) return;
    updateBeats(newLayout);
  };
  const rmvBeat = () => {
    const newLayout = [...layout];
    if (newLayout[0].beats.length === beatsMeasure) return;
    updateBeats(newLayout, true);
  };

  const playNote = () => {
    const metranomeSoundB1 = createMetronomeOscillatorB1(audioCtx);
    const metranomeSound = createMetronomeOscillator(audioCtx);
    const val = count === layout[0].beats.length ? 1 : count + 1;
    setCount(val);
    const layoutNotes = layout.map(
      ({ beats, name }) => beats[val - 1] && getOscillator(audioCtx, name)
    );
    layoutNotes.forEach(note => {
      if (note) note.start();
    });
    if (metronome) {
      if (val % beatsMeasure === 1) {
        metranomeSoundB1.start();
      } else {
        metranomeSound.start();
      }
    }
    setTimeout(() => {
      if (metronome) {
        if (val % beatsMeasure === 1) {
          metranomeSoundB1.stop();
        } else {
          metranomeSound.stop();
        }
      }
      layoutNotes.forEach(note => {
        if (note) note.stop();
      });
    }, 25);
  };

  if (error) return <Error {...{ error }} />;

  return (
    <>
      <Helmet>
        <title>Drum Root</title>
      </Helmet>
      <SoundUploader />
      <p>
        Count:
        {count}
      </p>
      <p>
        Tempo:
        {tempo}
      </p>
      <TimeSignature
        {...{ beatDivision, beatsMeasure, setBeatDivision, setBeatsMeasure }}
      />
      <button onClick={() => setMetronome(!metronome)}>
        {metronome ? 'Turn off metronome' : 'Turn on metronome'}
      </button>
      <input type="button" value="add new beat" onClick={() => addNewBeat()} />
      <input type="button" value="remove beat" onClick={() => rmvBeat()} />
      <hr />
      <Slider
        axis="x"
        x={tempo}
        onChange={({ x }) => setTempo(x)}
        xmin={30}
        xmax={300}
      />
      <button onClick={() => onPlayButtonClick(!play)}>
        {play ? 'Stop' : 'Play'}
      </button>
      <DrumPad {...{ count, layout, swapBeat, beatsMeasure }} />
    </>
  );
};

Home.getInitialProps = async ctx => {
  const token = auth(ctx);
  let originalLayout = [];
  let error;
  try {
    const response = await fetch('http://localhost:3000/drumlayout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    });
    console.log({ response });
    originalLayout = await response.json();
  } catch (e) {
    error = e;
  }
  return { originalLayout, error };
};

Home.propTypes = {
  originalLayout: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      beats: PropTypes.arrayOf(PropTypes.bool)
    })
  ),
  error: PropTypes.string
};

export default Home;

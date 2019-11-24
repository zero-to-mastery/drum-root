import React, { useState, useEffect } from "react";
import Slider from "react-input-slider";
import fetch from "isomorphic-unfetch";
import Error from "../Components/Error";
import DrumPad from "../Components/DrumPad";
import TimeSignature from "../Components/TimeSignature/timeSignature";

import { useInterval, auth } from "../utils/common-functions";
import {
  getOscillator,
  createMetronomeOscillator,
  createMetronomeOscillatorB1
} from "../utils/sounds";
import { Helmet } from "react-helmet";

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

  const onPlayButtonClick = active => {
    if (!active) {
      setCount(1);
    }
    setPlay(active);
  };

  const swapBeat = (rowNum, beatNum) => {
    const newLayout = [...layout];
    newLayout[rowNum].beats[beatNum] = !layout[rowNum].beats[beatNum];
    setLayout(newLayout);
  };

  const addNewBeat = () => {
    const newLayout = [...layout];
    if (newLayout[0].beats.length === 16) return;
    newLayout.forEach(row => {
      row.beats.push(false);
    });
    setLayout(newLayout);
  };
  const rmvBeat = () => {
    const newLayout = [...layout];
    if (newLayout[0].beats.length === 4) return;
    newLayout.forEach(row => {
      row.beats.pop();
    });
    setLayout(newLayout);
  };

  const playNote = () => {
    const metranomeSoundB1 = createMetronomeOscillatorB1(audioCtx);
    const metranomeSound = createMetronomeOscillator(audioCtx);
    let val = count === layout[0].beats.length ? 1 : count + 1;
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

  if (error) return <Error {...{ error }}></Error>;

  return (
    <>
      <Helmet>
        <title>Drum Root</title>
      </Helmet>
      <p>Count: {count}</p>
      <p>Tempo: {tempo}</p>
      <TimeSignature
        {...{ beatDivision, beatsMeasure, setBeatDivision, setBeatsMeasure }}
      />
      <button onClick={() => setMetronome(!metronome)}>
        {metronome ? "Turn off metronome" : "Turn on metronome"}
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
        {play ? "Stop" : "Play"}
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
    const response = await fetch("http://localhost:3000/drumlayout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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

export default Home;

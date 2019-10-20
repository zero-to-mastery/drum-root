import React, { useState, useEffect } from "react";
import Slider from "react-input-slider";
import fetch from "isomorphic-unfetch";
import DrumPad from "../Components/DrumPad";
import { useInterval, auth } from "../utils/common-functions";
import { getOscillator, createMetronomeOscillator } from "../utils/sounds";

const Home = ({ originalLayout }) => {
  const [tempo, setTempo] = useState(100);
  const [play, setPlay] = useState(false);
  const [count, setCount] = useState(1);
  const [audioCtx, setAudioCtx] = useState();
  const [metronome, setMetronome] = useState(false);
  const [layout, setLayout] = useState(originalLayout);

  useInterval(() => {
    if (play) {
      setCount(count => (count === 4 ? 1 : count + 1));
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

  const playNote = () => {
    const metranomeSound = createMetronomeOscillator(audioCtx);
    const layoutNotes = layout.map(
      ({ beats, name }) => beats[count - 1] && getOscillator(audioCtx, name)
    );
    layoutNotes.forEach(note => {
      if (note) note.start();
    });
    if (metronome) metranomeSound.start();
    setTimeout(() => {
      if (metronome) metranomeSound.stop();
      layoutNotes.forEach(note => {
        if (note) note.stop();
      });
    }, 25);
  };

  return (
    <>
      <p>Count: {count}</p>
      <p>Tempo: {tempo}</p>
      <button onClick={() => setMetronome(!metronome)}>
        {metronome ? "Turn off metronome" : "Turn on metronome"}
      </button>
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
      <DrumPad {...{ count, layout, swapBeat }} />
    </>
  );
};

Home.getInitialProps = async ctx => {
  const token = auth(ctx);
  console.log({ token });
  let originalLayout = [];
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
    console.log(e);
  }
  return { originalLayout };
};

export default Home;

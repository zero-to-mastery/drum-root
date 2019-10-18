import React, { useState, useEffect } from "react";
import Slider from "react-input-slider";
import DrumPad from "../Components/DrumPad";
import { useInterval } from "../utils/common-functions";
// import Tone from "tone";

// const synth = new Tone.Synth().toMaster();

const Home = () => {
  const [tempo, setTempo] = useState(100);
  const [play, setPlay] = useState(false);
  const [count, setCount] = useState(1);
  const [audioCtx, setAudioCtx] = useState();
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

  const createOscillator = () => {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = 0.5;
    oscillator.frequency.value = 1983;
    oscillator.type = "triangle";
    return oscillator;
  };

  const onPlayButtonClick = active => {
    if (!active) {
      setCount(1);
    }
    setPlay(active);
  };

  /* Play note on a delayed interval of t */
  const playNote = () => {
    const note = createOscillator();
    note.start();
    // synth.triggerAttackRelease("C4", "8n");
    setTimeout(() => {
      note.stop();
    }, 25);
  };

  return (
    <>
      <p>Count: {count}</p>
      <p>Tempo: {tempo}</p>
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
      <DrumPad
        {...{ count }}
        layout={[
          { name: "cymbol", icon: "🇹🇼", beats: [true, true, true, true] },
          { name: "bass", icon: "🛢️", beats: [true, false, false, false] },
          { name: "snare", icon: "🥁", beats: [false, false, true, false] }
        ]}
      />
      <div>Welcome to Next.js!</div>
    </>
  );
};

export default Home;

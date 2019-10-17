import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-input-slider";
import Tone from "tone";

const synth = new Tone.Synth().toMaster();

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  &,
  th,
  td {
    padding: 5px;
    border: 1px solid black;
  }
  td:first-child {
    background-color: ${({ count }) => (count === 1 ? "yellow" : "white")};
  }

  td:first-child + td {
    background-color: ${({ count }) => (count === 2 ? "yellow" : "white")};
  }

  td:first-child + td + td {
    background-color: ${({ count }) => (count === 3 ? "yellow" : "white")};
  }

  td:first-child + td + td + td {
    background-color: ${({ count }) => (count === 4 ? "yellow" : "white")};
  }
`;

const Home = () => {
  const [tempo, setTempo] = useState(100);
  const [play, setPlay] = useState(false);
  const [count, setCount] = useState(1);
  const [playIntereval, setPlayInterval] = useState();
  const [audioCtx, setAudioCtx] = useState();
  useEffect(() => {
    setAudioCtx(new (window.AudioContext || window.webkitAudioContext)());
    return clearInterval(playIntereval);
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
    console.log({ active });
    if (active) {
      setPlayInterval(
        setInterval(() => {
          setCount(count => (count === 4 ? 1 : count + 1));
          playNote();
        }, 1000 * (60 / tempo))
      );
    } else {
      clearInterval(playIntereval);
      setPlayInterval(null);
    }
    setPlay(active);
  };

  /* Play note on a delayed interval of t */
  const playNote = () => {
    const note = createOscillator();
    note.start();
    synth.triggerAttackRelease("C4", "8n");
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
        {play ? "Pause" : "Play"}
      </button>
      <colgroup span="4"></colgroup>
      <Table {...{ count }}>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
        </tr>
        <tr>
          <td>🛢️</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>🥁</td>
          <td></td>
        </tr>
      </Table>
      <div>Welcome to Next.js!</div>
    </>
  );
};

export default Home;

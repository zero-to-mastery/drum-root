import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const SoundWave = ({ audioFile, waveColor, progressColor }) => {
  const waveFormRef = useRef(null);
  const waveSurferRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    waveSurferRef.current = window.WaveSurfer.create({
      container: waveFormRef.current,
      waveColor,
      progressColor
    });
    waveSurferRef.current.load(audioFile);
    return () => waveSurferRef.current.destroy();
  }, []);

  const handlePlayAndPause = () => {
    waveSurferRef.current.playPause();
    setIsPlay(!isPlay);
  };

  return (
    <>
      <button onClick={handlePlayAndPause}>{isPlay ? "Pause" : "Play"}</button>
      <div ref={waveFormRef} />
    </>
  );
};

SoundWave.propTypes = {
  audioFile: PropTypes.string.isRequired,
  waveColor: PropTypes.string,
  progressColor: PropTypes.string
};

export default SoundWave;

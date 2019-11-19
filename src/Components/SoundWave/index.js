import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

function SoundWave({ src, waveColor, progressColor }) {
  const waveFormRef = useRef(null);
  const waveSurferRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    waveSurferRef.current = window.WaveSurfer.create({
      container: waveFormRef.current,
      waveColor,
      progressColor
    });
    waveSurferRef.current.load(src);
    return () => waveSurferRef.current.destroy();
  }, []);

  const handlePlayAndPause = () => {
    waveSurferRef.current.playPause();
    setIsPlay(isPlay === true ? false : true);
  };

  return (
    <>
      <button onClick={handlePlayAndPause}>{isPlay ? "Pause" : "Play"}</button>
      <div ref={waveFormRef} />
    </>
  );
}

SoundWave.propTypes = {
  src: PropTypes.string.isRequired,
  waveColor: PropTypes.string,
  progressColor: PropTypes.string
};

export default SoundWave;

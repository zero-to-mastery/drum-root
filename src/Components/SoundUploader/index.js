import React, { useRef, useState } from "react";
import styled from "styled-components";

const FileInput = styled.input``;

const SoundUploader = ({}) => {
  const inputEl = useRef(null);

  const uploadSound = event => {
    try {
      const file = event.target.files[0];
      if (file.size > 1000000) {
        // possibly change this to a flash-message for better UX/UI in the future
        alert("File size must be less than 1MB");
        inputEl.current.value = "";
      } else {
        // add sound to a container component that stores users custom sounds??
      }
    } catch (err) {
      alert("Something went wrong with file upload");
    }
  };

  return (
    <div>
      <span>Upload Sound</span>
      <FileInput
        ref={inputEl}
        type="file"
        accept=".mp3,.wav"
        onChange={uploadSound}
      />
    </div>
  );
};

export default SoundUploader;

import React, { useRef, useState } from "react";
import styled from "styled-components";

const FileInput = styled.input``;
const FileErrorSpan = styled.span`
  color: red;
`;

const SoundUploader = () => {
  const inputEl = useRef(null);
  const [fileError, setFileError] = useState(false);
  const errorDuration = 2000;
  const errorTimeout = () =>
    setTimeout(() => setFileError(false), errorDuration);

  const uploadSound = event => {
    try {
      const file = event.target.files[0];
      if (file.size > 1000000) {
        setFileError("File size must not exceed 1MB");
        errorTimeout();
        inputEl.current.value = "";
      } else {
        // TODO: What should we do here, add sound to a container component that stores users custom sounds?
      }
    } catch (err) {
      setFileError("Something went wrong with file upload");
      errorTimeout();
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
      {fileError && <FileErrorSpan>{fileError}</FileErrorSpan>}
    </div>
  );
};

export default SoundUploader;

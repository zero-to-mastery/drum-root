import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, color, files } from "@storybook/addon-knobs";
import SoundWave from "./index";
import soundFile from "../../resources/audio/testSound.mp3";

const returnKnobs = () => {
  const label = "Audio Files";
  const accept = ".mp3";
  const defaultValue = soundFile;
  return {
    waveColor: color("Wave Color", "#333333"),
    progressColor: color("Progress Color", "#DE6A08"),
    audioFile: files(label, accept, defaultValue)
  };
};

storiesOf("SoundWave", module)
  .addDecorator(withKnobs)
  .add("with default", () => {
    return <SoundWave audioFile={soundFile} />;
  })
  .add("with different props", () => {
    const knobs = returnKnobs();
    return <SoundWave {...knobs} />;
  });

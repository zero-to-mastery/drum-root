const configuredOscillators = {
  metronome: {
    gain: {
      value: 0.5
    },
    frequency: {
      value: 1983
    },
    type: "triangle"
  },
  metronomeB1: {
    gain: {
      value: 0.5
    },
    frequency: {
      value: 440
    },
    type: "triangle"
  },
  bassDrum: {
    frequency: {
      value: 150
    }
  },
  hiHat: {
    frequency: {
      value: 80
    },
    type: "square"
  },
  snare: {
    frequency: {
      value: 100
    },
    // Not standard OscillatorNode type
    type: "highpass"
  }
};

const oscillatorFactory = (audioCtx, options) => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  const { gain, ...oscillatorOptions } = options;

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  if (gain) gainNode.gain.value = gain.value;
  if (oscillatorOptions.frequency)
    oscillator.frequency.value = oscillatorOptions.frequency.value;
  if (oscillatorOptions.type) oscillator.type = oscillatorOptions.type;

  return oscillator;
};

export const createMetronomeOscillator = audioCtx =>
  oscillatorFactory(audioCtx, configuredOscillators["metronome"]);

export const createMetronomeOscillatorB1 = audioCtx =>
  oscillatorFactory(audioCtx, configuredOscillators["metronomeB1"]);

export const createBassDrumOscillator = audioCtx =>
  oscillatorFactory(audioCtx, configuredOscillators["bassDrum"]);

export const createHiHatOscillator = audioCtx =>
  oscillatorFactory(audioCtx, configuredOscillators["hiHat"]);

export const createSnareOscillator = audioCtx =>
  oscillatorFactory(audioCtx, configuredOscillators["snare"]);

export const getOscillator = (audioCtx, type) => {
  return {
    bass: createBassDrumOscillator(audioCtx),
    hiHat: createHiHatOscillator(audioCtx),
    snare: createSnareOscillator(audioCtx),
    metronome: createMetronomeOscillator(audioCtx)
  }[type];
};

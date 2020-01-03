export const createMetronomeOscillator = audioCtx => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = 0.5;
  oscillator.frequency.value = 1983;
  oscillator.type = "triangle";
  return oscillator;
};

export const createMetronomeOscillatorB1 = audioCtx => {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = 0.5;
  oscillator.frequency.value = 440;
  oscillator.type = "triangle";
  return oscillator;
};

export const createBassDrumOscillator = audioCtx => {
  const oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  oscillator.connect(gain);
  gain.connect(audioCtx.destination);

  oscillator.frequency.value = 150;
  return oscillator;
};

export const createHiHatOscillator = audioCtx => {
  var oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  oscillator.connect(gain);
  gain.connect(audioCtx.destination);

  oscillator.type = "square";
  oscillator.frequency.value = 80;
  return oscillator;
};

export const createSnareOscillator = audioCtx => {
  var oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  oscillator.connect(gain);
  gain.connect(audioCtx.destination);

  oscillator.type = "highpass";
  oscillator.frequency.value = 1000;

  return oscillator;
};

export const getOscillator = (audioCtx, type) => {
  return {
    bass: createBassDrumOscillator(audioCtx),
    hiHat: createHiHatOscillator(audioCtx),
    snare: createSnareOscillator(audioCtx),
    metronome: createMetronomeOscillator(audioCtx)
  }[type];
};

import styled, { withTheme } from 'styled-components';
import React, { useRef, useEffect } from 'react';

const Canvas = styled.canvas`
  width: 100%;
  height: 50px;
`;
let speed = 3;
let started = false;
let currentProgress;
let playing;

const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

const start = (current, theme) => {
  let lineArray = [];
  const ctx = current.getContext('2d');
  const width = current.width;
  const height = current.height;
  ctx.lineWidth = 2;
  ctx.strokeStyle = theme.accent;

  for (let x = 0.5; x < width; x += ctx.lineWidth) {
    lineArray.push({
      x,
      y: 50 - Math.random() * 50,
      direction: speed - 1 + Math.random() * speed,
    });
  }
  started = !started;
  draw(lineArray, width, height, ctx);
};

const draw = (lineArray, width, height, ctx) => {
  if (!playing) {
    requestAnimationFrame(() => draw(lineArray, width, height, ctx));
    return;
  }
  ctx.clearRect(0, 0, width, height);
  for (let line of lineArray) {
    if (line.y >= height / 1.5 || line.y <= 0) {
      line.direction = -line.direction;
    }
    if (line.x <= width * (currentProgress / 100)) {
      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.moveTo(line.x, height);
      ctx.lineTo(line.x, (line.y += line.direction));
      ctx.stroke();
    }
  }

  requestAnimationFrame(() => draw(lineArray, width, height, ctx));
};

const SoundWave = ({ progress, theme, isPlaying }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!started) {
      start(ref.current, theme);
    }
  });

  playing = isPlaying;
  currentProgress = progress;

  return <Canvas ref={ref} />;
};

export default withTheme(SoundWave);

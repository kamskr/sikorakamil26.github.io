import React from 'react';
import SoundWave from './SoundWave';
import styled from 'styled-components';

export default {
  title: 'SoundWave',
  decorators: [(storyFn) => <DarkBackground>{storyFn()}</DarkBackground>],
};

const DarkBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.background};
`;

export const soundWave = () => <SoundWave progress={50} />;
// Knobs as dynamic variables.

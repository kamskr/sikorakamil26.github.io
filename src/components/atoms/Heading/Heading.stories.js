import React from 'react';
import Heading from './Heading';
import styled from 'styled-components';

export default {
  title: 'Heading',
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
export const headingNormal = () => <Heading fontSize="xs">KanyeWest</Heading>;
export const headingNormalBold = () => <Heading bold>KanyeWest</Heading>;
export const headingSecondary = () => <Heading secondary>Self Conscious</Heading>;
// Knobs as dynamic variables.

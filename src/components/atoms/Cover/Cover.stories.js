import React from 'react';
import styled from 'styled-components';
import Cover from './Cover';
import Cover1 from '../../../assets/covers/cover.png';
import Cover2 from '../../../assets/covers/cover-1.png';
import Unreleased_cover from '../../../assets/covers/unreleased_cover.png';

export default {
  title: 'Cover',
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

export const cover1 = () => <Cover coverImage={Cover1} />;
export const cover2 = () => <Cover coverImage={Cover2} />;
export const unreleased_cover = () => <Cover coverImage={Unreleased_cover} unreleased />;

import styled from 'styled-components';
import React from 'react';

const BarContainer = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  margin: auto 10px;
`;

const ActiveBar = styled.input`
  transition: 3s;
  -webkit-appearance: none;
  position: absolute;
  background: ${({ theme }) => theme.progressBar};
  height: 2px;
  border-radius: 6px;
  width: 99%;
  top: -3px;
  :focus {
    outline: none;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.progressBar};
    cursor: pointer;
  }
  ::-webkit-slider-runnable-track {
  }
  :focus::-webkit-slider-runnable-track {
    background: ${({ theme }) => theme.progressBar};
    height: 8px;
    border-radius: 6px;
    width: 99%;
  }
`;
// const BackgroundBar = styled.div`
//   position: absolute;
//   background: ${({ theme }) => theme.progressBar};
//   height: 2px;
//   width: 100%;
//   text-align: center;
//   top: -4px;
// `;

const Dot = styled.div`
  background: ${({ theme }) => theme.progressBar};
  position: absolute;
  right: 0;
  height: 8px;
  width: 8px;
  top: -4px;
  border-radius: 6px;
`;

const ProgressBar = ({ progress, onRewind }) => (
  <BarContainer>
    <ActiveBar
      type="range"
      value={progress}
      min="0"
      max="100"
      step="1"
      onChange={({ target }) => onRewind(parseInt(target.value))}
    />
    <Dot />
  </BarContainer>
);
export default ProgressBar;
// https://dev.to/richiksc/standardizing-input-type-range-styling-3lkl

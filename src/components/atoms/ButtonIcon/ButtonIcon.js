import styled, { css } from 'styled-components';
import React from 'react';

const IconBtn = styled.button`
  min-width: 20px;
  height: 30px;
  margin: 0 15px;
  
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: transparent;
  border: none;
  outline: none;
  :active {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);;
  }

  ${({ playingIcon }) =>
    playingIcon &&
    css`
      margin: -40px -30px;
      min-width: 204px;
      height: 204px;
      background-size: 100%;
      background-color: transparent;
      background-position: left 6px center;
    `}
  ${({ notPlayingIcon }) =>
    notPlayingIcon &&
    css`
      margin: 0 10px;
      min-width: 124px;
      height: 124px;
      background-size: 100%;
      background-color: transparent;
    `}
    ${({ moreIcon }) =>
      moreIcon &&
      css`
        padding: 0px;
        background-size: 15%;
        background-color: transparent;
      `}
    ${({ backIcon }) =>
      backIcon &&
      css`
        min-width: 10px;
        height: 30px;
      `} 
      ${({ playlist }) =>
        playlist &&
        css`
          margin: 0 40px;
        `}
`;

const MoreWrapper = styled.button`
  display: flex;
  height: 30px;
  flex-direction: column;
  background-color: transparent;
  border: none;
  :active {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
  }
`;

const ButtonIcon = ({ onClick, icon, ...rest }) => (
  <>
    {!rest.moreIcon && <IconBtn onClick={onClick} icon={icon} {...rest} />}
    {rest.moreIcon && (
      <MoreWrapper onClick={onClick}>
        <IconBtn icon={icon} {...rest} />
        <IconBtn icon={icon} {...rest} />
        <IconBtn icon={icon} {...rest} />
      </MoreWrapper>
    )}
  </>
);

export default ButtonIcon;

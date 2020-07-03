import React from 'react';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import BackIcon from '../../../assets/icons/back_ico.svg';
import HideIcon from '../../../assets/icons/hide_ico.svg';
import MoreIcon from '../../../assets/icons/more_ico.svg';
import NextIcon from '../../../assets/icons/next_ico.svg';
import PlayActiveIcon from '../../../assets/icons/Play_active.png';
import PlayInactiveIcon from '../../../assets/icons/Play_inactive.png';
import PlaylistIcon from '../../../assets/icons/playlist_ico.svg';
import PreviousIcon from '../../../assets/icons/previous_ico.svg';
import RepeatIcon from '../../../assets/icons/repeat_ico.svg';
import ShuffleIcon from '../../../assets/icons/shuffle_ico.svg';

export default {
  title: 'ButtonIcon',
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

export const backIcon = () => <ButtonIcon icon={BackIcon} />;
export const hideIcon = () => <ButtonIcon icon={HideIcon} />;
export const moreIcon = () => <ButtonIcon icon={MoreIcon} moreIcon />;
export const nextIcon = () => <ButtonIcon icon={NextIcon} />;
export const playActiveIcon = () => <ButtonIcon icon={PlayActiveIcon} playingIcon />;
export const playInactiveIcon = () => <ButtonIcon icon={PlayInactiveIcon} notPlayingIcon />;
export const playlistIcon = () => <ButtonIcon icon={PlaylistIcon} />;
export const previousIcon = () => <ButtonIcon icon={PreviousIcon} />;
export const repeatIcon = () => <ButtonIcon icon={RepeatIcon} />;
export const shuffleIcon = () => <ButtonIcon icon={ShuffleIcon} />;

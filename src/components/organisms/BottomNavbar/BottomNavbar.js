import React from 'react';
import styled from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import SongDisplay from '../../molecules/SongDisplay/SongDisplay';
//icons
import PlaylistIcon from '../../../assets/icons/playlist_ico.svg';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  min-height: 80px;
  margin-right: -20px;
  background-color: ${({ theme }) => theme.white};
  align-items: center;
  justify-content: center;
`;
const Next = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.grey};
`;
const InnerSectionWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: auto 20px auto 0;
`;

const BottomNavbar = ({ songsById, songs, activeSongIndex }) => {
  let nextSongIndex = activeSongIndex + 1 >= songs.length ? 0 : activeSongIndex + 1;
  return (
    <StyledWrapper>
      <ButtonIcon icon={PlaylistIcon} playlist />
      <InnerSectionWrapper>
        <Next>NEXT</Next>
        <SongDisplay
          songTitle={songsById[songs[nextSongIndex]].name}
          duration={songsById[songs[nextSongIndex]].duration}
        />
      </InnerSectionWrapper>
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => ({
  songsById: state.songs.byId,
  songs: state.songs.allIds,
  activeSongIndex: state.songs.activeSongIndex,
  isPlaying: state.songs.isPlaying,
  repeat: state.songs.repeat,
});

export default connect(mapStateToProps)(BottomNavbar);

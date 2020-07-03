import React from 'react';
import styled from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Heading from '../../atoms/Heading/Heading';
//icons
import BackIcon from '../../../assets/icons/back_ico.svg';
import PlayActiveIcon from '../../../assets/icons/Play_active.png';
import PlayInactiveIcon from '../../../assets/icons/Play_inactive.png';
import MoreIcon from '../../../assets/icons/more_ico.svg';
//redux
import { connect } from 'react-redux';
import { play, pause } from '../../../redux/actionCreators/songsActionCreators';

const StyledWrapper = styled.div`
  padding-top: 20px;
  width: 100vw;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InnerLeftWrapper = styled.div`
  margin-right: auto;
`;
const InnerCenterWrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 11vw;

  h1 {
    margin: 5px 0;
  }
`;
const InnerCenterWrapperPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: -15vw;

  h1 {
    margin: 5px 0;
  }
`;
const InnerRightWrapper = styled.div`
  margin-left: auto;
`;

const TopNavbar = ({ isPlaying, navType, song }) => (
  <StyledWrapper>
    <InnerLeftWrapper>
      <ButtonIcon icon={BackIcon} backIcon />;
    </InnerLeftWrapper>
    <InnerCenterWrapperMain>
      {navType === 'main' && (
        <>
          <Heading fontSize="s" secondary>
            Album
          </Heading>
          <Heading fontSize="m">{song.album}</Heading>
        </>
      )}
    </InnerCenterWrapperMain>
    <InnerCenterWrapperPlaylist>
      {navType === 'playlist' && (
        <>
          <Heading bold>Unreleased</Heading>
          <Heading secondary>{song.album}</Heading>
        </>
      )}
    </InnerCenterWrapperPlaylist>
    <InnerRightWrapper>
      {navType === 'playlist' && (
        <>
          {isPlaying && <ButtonIcon icon={PlayActiveIcon} playingIcon onClick={pause} />}
          {!isPlaying && <ButtonIcon icon={PlayInactiveIcon} notPlayingIcon onClick={play} />}
        </>
      )}
      {navType !== 'playlist' && <ButtonIcon icon={MoreIcon} moreIcon />}
    </InnerRightWrapper>
  </StyledWrapper>
);

const mapDispatchToProps = {
  play,
  pause,
};

const mapStateToProps = (state) => ({
  isPlaying: state.songs.isPlaying,
  song: state.songs.byId[state.songs.allIds[state.songs.activeSongIndex]],
});
export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);

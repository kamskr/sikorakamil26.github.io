import React from 'react';
import styled from 'styled-components';
import SongSlider from '../../molecules/SongSlider/SongSlider';
import Heading from '../../atoms/Heading/Heading';
import MediaControllBar from '../../molecules/MediaControllBar/MediaControllBar';
import ProgressSection from '../../molecules/ProgressSection/ProgressSection';

import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -4px;
`;
const InfoWrapper = styled.div`
  margin-top: -50px;
  text-align: center;
  margin-bottom: 10%;
`;
const Player = ({ song }) => (
  <StyledWrapper>
    <SongSlider />
    <InfoWrapper>
      <Heading bold>{song.name}</Heading>
      <Heading secondary fontSize="s">
        {song.artist}
      </Heading>
    </InfoWrapper>
    <MediaControllBar />
    <ProgressSection />
  </StyledWrapper>
);

const mapStateToProps = (state) => ({
  song: state.songs.byId[state.songs.allIds[state.songs.activeSongIndex]],
});

export default connect(mapStateToProps)(Player);

import React from 'react';
import moment from 'moment';
import styled, { withTheme } from 'styled-components';

const SongDisplayStyle = styled.div`
  display: flex;
  flex-direction: row;

  min-width: 0;
`;

const Dots = styled.svg`
  width: 100%;
  height: 5px;
  margin: auto 10px 2px 10px;
`;

const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.black};
  white-space: nowrap;
`;

const SongDisplay = (props) => (
  <SongDisplayStyle>
    <Span>{props.songTitle}</Span>
    <Dots height="5px">
      <line
        x1="0"
        x2="100%"
        y1="2"
        y2="2"
        stroke={`${props.theme.grey}`}
        stroke-width="1"
        stroke-linecap="round"
        stroke-dasharray="1, 10"
      />
    </Dots>

    <Span color="grey" style={{ color: `${props.theme.grey}` }}>
      {moment({ minutes: Math.floor(props.duration / 60), seconds: props.duration % 60 }).format(
        'm:ss',
      )}
    </Span>
  </SongDisplayStyle>
);

export default withTheme(SongDisplay);

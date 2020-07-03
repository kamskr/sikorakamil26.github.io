import styled, { css } from 'styled-components';

const Cover = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-image: url(${({ coverImageUrl }) => coverImageUrl});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: transparent;
  border: none;
  margin: 150px auto 0 auto;
  transform: translate(0%, -50%);

  ${({ active }) =>
    active &&
    css`
      width: 100%;
      height: 100%;
    `}
`;

export default Cover;

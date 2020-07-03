import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  color: ${({ theme, color }) => theme[color]};
`;

export default Paragraph;

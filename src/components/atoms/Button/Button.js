import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme }) => theme.accent};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  outline: none;
`;

export default Button;

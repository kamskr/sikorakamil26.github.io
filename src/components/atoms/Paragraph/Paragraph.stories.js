import React from 'react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';
import Paragraph from './Paragraph';

export default { title: 'Paragraph', decorators: [withKnobs] };

export const paragraphBlack = () => <Paragraph color="black">Paragraph</Paragraph>;
export const paragraphGrey = () => <Paragraph color="grey">Paragraph</Paragraph>;
// Knobs as dynamic variables.

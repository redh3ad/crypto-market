import { SyntheticEvent } from 'react';
import defaultImage from '../assets/logo_mark.png';

export const getDefaultImage = (
  event: SyntheticEvent<HTMLImageElement, Event>,
) => {
  const img = event.target as HTMLImageElement;
  img.src = defaultImage;
};

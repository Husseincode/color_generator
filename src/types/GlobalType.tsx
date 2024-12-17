/** @format */

import { HSLATypes, HSLTypes, RGBATypes, RGBTypes } from './types';

export interface GlobalState {
  heading: string;
  setHeading: (type: string) => void;
  RGBColors: RGBTypes;
  setRGBColors: ({ red, green, blue }: RGBTypes) => void;
  RGBAColors: RGBATypes;
  setRGBAColors: ({ red, green, blue, alpha }: RGBATypes) => void;
  HSLColors: HSLTypes;
  setHSLColors: ({ hue, saturation, lightness }: HSLTypes) => void;
  HSLAColors: HSLATypes;
  setHSLAColors: ({ hue, saturation, lightness, alpha }: HSLATypes) => void;
}

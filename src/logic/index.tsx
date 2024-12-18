/** @format */

import { usePageContext } from '../context/context';

import RGB from '../components/rgb';
import RGBA from '../components/rgba';
import HSL from '../components/hsl';
import HSLA from '../components/hsla';

export const Container = () => {
  const { heading } = usePageContext();

  switch (heading) {
    case 'RGB':
      return <RGB />;
    case 'RGBA':
      return <RGBA />;
    case 'HSL':
      return <HSL />;
    case 'HSLA':
      return <HSLA />;
    default:
      return <RGB />;
  }
};

/** @format */

import { createContext, ReactNode, useContext, useState } from 'react';
import { GlobalState } from '../types/GlobalType';

const PageContext = createContext<GlobalState | undefined>(undefined);

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
  const [heading, setHeading] = useState<string>('RGB');
  const [RGBColors, setRGBColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  const [RGBAColors, setRGBAColors] = useState({
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0.5,
  });
  const [HSLColors, setHSLColors] = useState({
    hue: 0,
    saturation: 0,
    lightness: 0,
  });
  const [HSLAColors, setHSLAColors] = useState({
    hue: 0,
    saturation: 0,
    lightness: 0,
    alpha: 0.5,
  });
  return (
    <PageContext.Provider
      value={{
        heading,
        setHeading,
        RGBColors,
        setRGBColors,
        RGBAColors,
        setRGBAColors,
        HSLAColors,
        HSLColors,
        setHSLAColors,
        setHSLColors,
      }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('Must be within the PageContextProvider');
  }
  return context;
};

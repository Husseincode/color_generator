/** @format */

import { FC } from 'react';
import { usePageContext } from '../context/context';

interface OptionProps {
  label?: string;
  value: string;
  onClick: () => void;
}

const Option: FC<OptionProps> = ({ value, onClick }) => {
  const { heading } = usePageContext();
  return (
    <button
      type='button'
      title={value}
      className={`h-[70px] flex justify-center transition-all duration-500 items-center cursor-pointer slide-from-bottom ${
        value.toUpperCase() === heading ? 'bg-[#646cff]' : 'bg-[#1a1a1a]'
      }`}
      onClick={onClick}>
      {value.toUpperCase()}
    </button>
  );
};

export default Option;

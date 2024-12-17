/** @format */

import { FC } from 'react';

interface InputslideProps {
  colorType: string;
  id: string;
  title: string;
  value: string | number;
  name: string;
  handleChange: (e: { target: { name: string; value: string } }) => void;
}

const Inputslide: FC<InputslideProps> = ({
  colorType: colorName,
  id,
  title,
  value,
  handleChange,
  name,
}) => {
  return (
    <label
      className='flex flex-col justify-center items-center gap-[5px]'
      htmlFor={id}>
      <span>{colorName}</span>
      <input
        title={title}
        value={value}
        onChange={handleChange}
        min={0}
        max={255}
        type='range'
        name={name}
        id={id}
      />
      <span className='text-white'>{value}</span>
    </label>
  );
};

export default Inputslide;

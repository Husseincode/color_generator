/** @format */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import Option from './options';
import { colorTypes } from '../data/data';
import { usePageContext } from '../context/context';
import { Container } from '../logic';
import Sidebar from './sidebar';

const Generator = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { heading, setHeading } = usePageContext();

  const handleDeviceChange = () => {
    setIsMobile(window.innerWidth <= 768);
    console.log(isMobile);
  };

  useEffect(() => {
    window.addEventListener('resize', handleDeviceChange);
    return () => window.removeEventListener('resize', handleDeviceChange);
  }, []);

  return (
    <section className='w-full flex justify-between py-[60px]'>
      <button
        onClick={() => {
          setIsOpened(!isOpened);
        }}
        type='button'
        className='absolute top-4 right-6 z-10'>
        {''}
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M2.75233 17.9997H21.2523C21.6666 17.9997 22.0023 18.3355 22.0023 18.7497C22.0023 19.1294 21.7202 19.4432 21.3541 19.4928L21.2523 19.4997H2.75233C2.33811 19.4997 2.00233 19.1639 2.00233 18.7497C2.00233 18.37 2.28447 18.0562 2.65055 18.0065L2.75233 17.9997ZM2.75233 11.5027H21.2523C21.6666 11.5027 22.0023 11.8385 22.0023 12.2527C22.0023 12.6324 21.7202 12.9462 21.3541 12.9959L21.2523 13.0027H2.75233C2.33811 13.0027 2.00233 12.6669 2.00233 12.2527C2.00233 11.873 2.28447 11.5592 2.65055 11.5095L2.75233 11.5027ZM2.75146 5.00293H21.2515C21.6657 5.00293 22.0015 5.33872 22.0015 5.75293C22.0015 6.13263 21.7193 6.44642 21.3533 6.49608L21.2515 6.50293H2.75146C2.33724 6.50293 2.00146 6.16714 2.00146 5.75293C2.00146 5.37323 2.28361 5.05944 2.64969 5.00978L2.75146 5.00293Z'
            fill='#495057'
          />
        </svg>
      </button>
      <Sidebar isOpened={isOpened} />
      <div className='flex flex-col gap-[30px] items-center w-full py-[50px] px-[14px] md:px-0'>
        {/**Heading */}
        <h2 className='text-3xl slide-from-top'>
          <span>{heading}</span> color
        </h2>

        {/**Container color type */}
        <Container />

        {/**Other optionss */}
        <div className='w-full md:w-[800px] min-h-[100px] shadow-sm rounded-[10px] p-2 grid grid-cols-2 md:grid-cols-3 gap-[10px]'>
          {colorTypes.map((item, idx: number) => (
            <Option
              value={item.name}
              onClick={() => {
                setHeading(item.name.toUpperCase());
              }}
              key={idx}
            />
          ))}
        </div>
      </div>
      {/* <aside className='w-[300px] border border-dashed h-[100vh] overflow-y-scroll'></aside> */}
    </section>
  );
};

export default Generator;

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

  const { heading, setHeading } = usePageContext();

  const handleDeviceChange = () => {
    setIsMobile(window.innerWidth <= 768);
    console.log(isMobile);
  };

  useEffect(() => {
    window.addEventListener('resize', handleDeviceChange);
    return () => window.removeEventListener('resize', handleDeviceChange);
  }, []);
  if (isMobile)
    return (
      <p>
        This application is not optimized for use for mobile, try switching to
        tablet or PC
      </p>
    );
  return (
    <section className='w-full flex justify-between'>
      <Sidebar />
      <div className='flex flex-col gap-[30px] items-center justify-center w-full py-[50px]'>
        {/**Heading */}
        <h2 className='text-3xl slide-from-top'>
          <span>{heading}</span> color
        </h2>

        {/**Container color type */}
        <Container />

        {/**Other optionss */}
        <div className='w-[800px] min-h-[100px] shadow-sm rounded-[10px] p-2 grid grid-cols-3 gap-[10px]'>
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

/** @format */
import { Fragment } from 'react/jsx-runtime';
import { usePageContext } from '../context/context';

const HSLA = () => {
  const { HSLAColors, setHSLAColors } = usePageContext();
  const handleHSLAColorChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setHSLAColors({ ...HSLAColors, [name]: Number(value) });
  };
  return (
    <Fragment>
      <div
        style={{
          background: `hsla(${HSLAColors.hue},${HSLAColors.saturation}%, ${HSLAColors.lightness}%, ${HSLAColors.alpha})`,
        }}
        className='w-full md:w-[400px] slide-from-left h-[70px] rounded-md transition-all duration-500 shadow-md border-white flex items-center justify-center text-white'>
        <span>
          hsla({HSLAColors.hue}, {HSLAColors.saturation}, {HSLAColors.lightness}
          , {HSLAColors.alpha})
        </span>
      </div>
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
        className='w-full md:w-[400px] flex justify-between gap-[20px] md:flex-row flex-col flex-wrap'>
        {/**Hue */}
        <label
          className='flex flex-col justify-center items-center gap-[5px]'
          htmlFor='hue'>
          <span>Hue</span>
          <input
            type='range'
            name='hue'
            max={360}
            min={0}
            onChange={handleHSLAColorChange}
            value={HSLAColors.hue}
            id='hue'
          />
          <span>{HSLAColors.hue}</span>
        </label>

        {/**Saturation range */}
        <label
          className='flex flex-col justify-center items-center gap-[5px]'
          htmlFor='saturation'>
          <span>Saturation</span>
          <input
            type='range'
            name='saturation'
            max={100}
            min={0}
            onChange={handleHSLAColorChange}
            value={HSLAColors.saturation}
            id='saturation'
          />
          <span>{HSLAColors.saturation}</span>
        </label>

        {/**Lightness range */}
        <label
          className='flex flex-col justify-center items-center gap-[5px]'
          htmlFor='lightness'>
          <span>Lightness</span>
          <input
            type='range'
            name='lightness'
            max={100}
            min={0}
            onChange={handleHSLAColorChange}
            value={HSLAColors.lightness}
            id='lightness'
          />
          <span>{HSLAColors.lightness}</span>
        </label>

        {/**Alpha range */}
        <label
          className='flex flex-col justify-center items-center gap-[5px]'
          htmlFor='alpha'>
          <span>Alpha</span>
          <input
            type='range'
            name='alpha'
            max={1}
            min={0}
            step={0.01}
            onChange={handleHSLAColorChange}
            value={HSLAColors.alpha}
            id='alpha'
          />
          <span>{HSLAColors.alpha}</span>
        </label>
      </form>
    </Fragment>
  );
};

export default HSLA;

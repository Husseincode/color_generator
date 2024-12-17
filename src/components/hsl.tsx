/** @format */
import { Fragment } from 'react/jsx-runtime';
import { usePageContext } from '../context/context';

const HSL = () => {
  const { HSLColors, setHSLColors } = usePageContext();
  const handleHSLColorChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setHSLColors({ ...HSLColors, [name]: Number(value) });
  };
  return (
    <Fragment>
      <div
        style={{
          background: `hsl(${HSLColors.hue},${HSLColors.saturation}%, ${HSLColors.lightness}%)`,
        }}
        className='w-[400px] slide-from-left h-[70px] rounded-md transition-all duration-500 shadow-md border-white flex items-center justify-center text-white'>
        <span>
          hsl({HSLColors.hue}, {HSLColors.saturation}, {HSLColors.lightness})
        </span>
      </div>
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
        className='w-[400px] flex justify-between gap-[20px]'>
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
            onChange={handleHSLColorChange}
            value={HSLColors.hue}
            id='hue'
          />
          <span>{HSLColors.hue}</span>
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
            onChange={handleHSLColorChange}
            value={HSLColors.saturation}
            id='saturation'
          />
          <span>{HSLColors.saturation}</span>
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
            onChange={handleHSLColorChange}
            value={HSLColors.lightness}
            id='lightness'
          />
          <span>{HSLColors.lightness}</span>
        </label>
      </form>
    </Fragment>
  );
};

export default HSL;

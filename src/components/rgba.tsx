/** @format */
import { Fragment } from 'react/jsx-runtime';
import Inputslide from './inputslide';
import { usePageContext } from '../context/context';

const RGBA = () => {
  const { RGBAColors, setRGBAColors } = usePageContext();
  const handleRGBColorChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setRGBAColors({ ...RGBAColors, [name]: Number(value) });
  };
  return (
    <Fragment>
      <div
        style={{
          background: `rgba(${RGBAColors.red},${RGBAColors.green}, ${RGBAColors.blue}, ${RGBAColors.alpha})`,
        }}
        className='w-[400px] slide-from-left h-[70px] rounded-md transition-all duration-500 shadow-md border-white flex items-center justify-center text-white'>
        <span>
          rgba({RGBAColors.red}, {RGBAColors.green}, {RGBAColors.blue},{' '}
          {RGBAColors.alpha})
        </span>
      </div>
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
        className='min-w-[400px] flex justify-between gap-[20px]'>
        <Inputslide
          id='red'
          value={RGBAColors.red}
          handleChange={handleRGBColorChange}
          name='red'
          title='red'
          colorType='RED'
        />

        {/**Green range */}
        <Inputslide
          id='green'
          value={RGBAColors.green}
          handleChange={handleRGBColorChange}
          name='green'
          title='green'
          colorType='GREEN'
        />

        {/**Blue range */}
        <Inputslide
          id='blue'
          value={RGBAColors.blue}
          handleChange={handleRGBColorChange}
          name='blue'
          title='blue'
          colorType='BLUE'
        />

        {/**Alpha range */}
        <label
          className='flex justify-center items-center flex-col gap-[5px]'
          htmlFor='alpha'>
          <span>Alpha</span>
          <input
            type='range'
            onChange={handleRGBColorChange}
            value={RGBAColors.alpha}
            name='alpha'
            id='alpha'
            max={1}
            min={0}
            step={0.01}
          />
          <span className='text-white'>{RGBAColors.alpha}</span>
        </label>
      </form>
    </Fragment>
  );
};

export default RGBA;

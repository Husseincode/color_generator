/** @format */
import { Fragment } from 'react/jsx-runtime';
import Inputslide from './inputslide';
import { usePageContext } from '../context/context';

const RGB = () => {
  const { RGBColors, setRGBColors } = usePageContext();
  const handleRGBColorChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setRGBColors({ ...RGBColors, [name]: Number(value) });
  };
  return (
    <Fragment>
      <div
        style={{
          background: `rgb(${RGBColors.red},${RGBColors.green}, ${RGBColors.blue})`,
        }}
        className='w-full md:w-[400px] slide-from-right h-[70px] rounded-md transition-all duration-500 shadow-md border-white flex items-center justify-center text-white'>
        <span>
          rgb({RGBColors.red}, {RGBColors.green}, {RGBColors.blue})
        </span>
      </div>
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
        className='w-full md:w-[400px] flex md:flex-row flex-col justify-between gap-[20px]'>
        <Inputslide
          id='red'
          value={RGBColors.red}
          handleChange={handleRGBColorChange}
          name='red'
          title='red'
          colorType='RED'
        />

        {/**Green range */}
        <Inputslide
          id='green'
          value={RGBColors.green}
          handleChange={handleRGBColorChange}
          name='green'
          title='green'
          colorType='GREEN'
        />

        {/**Blue range */}
        <Inputslide
          id='blue'
          value={RGBColors.blue}
          handleChange={handleRGBColorChange}
          name='blue'
          title='blue'
          colorType='BLUE'
        />
      </form>
    </Fragment>
  );
};

export default RGB;

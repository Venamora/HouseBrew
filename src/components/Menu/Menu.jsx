import React from 'react';
import Img2 from '../../assets/americano.png';

const MenuData = [
  {
    id: 1,
    img: Img2,
    name: 'Americano',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    aosDelay: 100,
  },
  {
    id: 2,
    img: Img2,
    name: 'Latte',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    aosDelay: 100,
  },
  {
    id: 3,
    img: Img2,
    name: 'Manual Brew',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    aosDelay: 300,
  },
  {
    id: 4,
    img: Img2,
    name: 'Magic Brew',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    aosDelay: 400,
  },
];

const Menu = () => {
  return (
  <>
  <span id='menu'></span>
  <div className="py-10">
      <div className="container">
        {/* header and title */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">Our Menu's</h1>
        </div>
        {/* Menu Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 md: gap-6 place-items-center">
          {/* Display first 2 items (index 1 and 2) */}
          {MenuData.filter((data, index) => index < 2).map((data, index) => (
            <div data-aos = 'fade-up' data-aos-delay = {data.aosDelay} key={index} className="flex flex-col items-center rounded-2xl bg-white hover:bg-primary hover text-white shadow-xl duration-200 max-w-[400px] group relative text-center">
              <img src={data.img} alt={data.name} className='max-w-[300px] block mx-auto transform -translate-y-1 group-hover:scale-110 group-hover:rotate-6 duration 200'/>
              <h1 className="text-xl font-semibold text-gray-600 group-hover:text-white">{data.name}</h1>
              <p className="p-3 text-gray-600 group-hover:text-white">{data.description}</p>
            </div>
          ))}

          {/* Display next 2 items (index 3 and 4) */}
          {MenuData.filter((data, index) => index >= 2 && index < 4).map((data, index) => (
            <div data-aos = 'fade-up' data-aos-delay = {data.aosDelay} key={index} className="flex flex-col items-center rounded-2xl bg-white hover:bg-primary hover text-white shadow-xl duration-200 max-w-[400px] group relative text-center">
              <img src={data.img} alt={data.name} className='max-w-[300px] block mx-auto transform -translate-y-1 group-hover:scale-110 group-hover:rotate-6 duration 300'/>
              <h1 className="text-xl font-semibold mt-2 text-gray-600 group-hover:text-white">{data.name}</h1>
              <p className="p-3 text-gray-600 group-hover:text-white">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default Menu;

import React from 'react';
import { Link } from 'react-router-dom';
import Img2 from '../../assets/americano.png';
import Img3 from '../../assets/latte.png';
import './Menu.css';

const MenuData = [
  {
    id: 1,
    img: Img2,
    name: 'Americano',
    description: 'A bold espresso with hot water.',
    aosDelay: 100,
  },
  {
    id: 2,
    img: Img3,
    name: 'Latte',
    description: 'Smooth espresso with steamed milk.',
    aosDelay: 100,
  },
  {
    id: 3,
    img: Img2,
    name: 'Manual Brew',
    description: 'Hand-crafted brewed coffee.',
    aosDelay: 300,
  },
  {
    id: 4,
    img: Img2,
    name: 'Magic Brew',
    description: 'Our signature secret brew.',
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
            {MenuData.map((data) => (
              <Link to={`/menu/${data.id}`} key={data.id}>
                <div data-aos='fade-up' data-aos-delay={data.aosDelay} className="flex flex-col items-center rounded-2xl bg-white hover:bg-primary hover text-white shadow-xl duration-200 max-w-[400px] group relative text-center">
                  <img src={data.img} alt={data.name} className='max-w-[300px] block mx-auto transform -translate-y-1 group-hover:scale-110 group-hover:rotate-6 duration 200' />
                  <h1 className="text-xl font-semibold text-gray-600 group-hover:text-white">{data.name}</h1>
                  <p className="p-3 text-gray-600 group-hover:text-white">{data.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

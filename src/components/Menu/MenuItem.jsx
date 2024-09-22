import React from 'react';
import { useParams } from 'react-router-dom';
import Img2 from '../../assets/americano.png';
import Img3 from '../../assets/latte.png';

// Same MenuData array for simplicity, but you could fetch this from an API instead
const MenuData = [
  {
    id: 1,
    img: Img2,
    name: 'Americano',
    description: 'A bold espresso with hot water. Perfect for those who enjoy a strong coffee experience.',
    aosDelay: 100,
  },
  {
    id: 2,
    img: Img3,
    name: 'Latte',
    description: 'Smooth espresso with steamed milk. A gentle coffee experience for a relaxing moment.',
    aosDelay: 100,
  },
  {
    id: 3,
    img: Img2,
    name: 'Manual Brew',
    description: 'Hand-crafted brewed coffee using the best beans. A treat for coffee connoisseurs.',
    aosDelay: 300,
  },
  {
    id: 4,
    img: Img2,
    name: 'Magic Brew',
    description: 'Our signature secret brew with a unique flavor. A must-try for adventurous coffee lovers.',
    aosDelay: 400,
  },
];

const MenuItem = () => {
  const { id } = useParams();
  const menuItem = MenuData.find(item => item.id === parseInt(id));

  if (!menuItem) {
    return <div>Menu item not found</div>;
  }

  return (
    <div className="container mx-auto my-10 p-6">
      <div className="max-w-2xl mx-auto">
        <img src={menuItem.img} alt={menuItem.name} className="w-full h-auto mb-4 rounded-lg" />
        <h1 className="text-4xl font-bold mb-4">{menuItem.name}</h1>
        <p className="text-lg text-gray-700">{menuItem.description}</p>
      </div>
    </div>
  );
};

export default MenuItem;

import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Img2 from '../../assets/americano.png';
import Img3 from '../../assets/latte.png';

const MenuData = [
  {
    id: 1,
    img: Img2,
    name: 'Americano',
    description: 'A bold espresso with hot water.',
    price: 'Rp 20.000',
    aosDelay: 100,
  },
  {
    id: 2,
    img: Img3,
    name: 'Latte',
    description: 'Smooth espresso with steamed milk.',
    price: 'Rp 30.000',
    aosDelay: 100,
  },
  {
    id: 3,
    img: Img2,
    name: 'Manual Brew',
    description: 'Hand-crafted brewed coffee.',
    price: 'Rp 25.000',
    aosDelay: 300,
  },
  {
    id: 4,
    img: Img2,
    name: 'Magic Brew',
    description: 'Our signature secret brew.',
    price: 'Rp28.000',
    aosDelay: 400,
  },
];

const MenuItem = ({isAdmin}) => {
  const { id } = useParams();
  console.log('id from URL:', id);

  const navigate = useNavigate();
  const menuItem = MenuData.find(item => item.id === parseInt(id));
  console.log('Found menu item:', menuItem);

  useEffect(() =>{
    if (!isAdmin) {
      navigate('/');
    }
  }, [isAdmin, navigate]);

  if (!menuItem) {
    return <div>Menu item not found</div>;
  }

  return (
    <div className="container mx-auto my-10 p-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <img src={menuItem.img} alt={menuItem.name} className="w-full h-auto mb-4 rounded-lg" />
        <h1 className="text-4xl font-bold mb-4">{menuItem.name}</h1>
        <p className="text-lg text-gray-700">{menuItem.description}</p>
        <p className="text-lg text-gray-700">{menuItem.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;

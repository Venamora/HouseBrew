import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchKopi from "../../hook/useFetchKopi";


const MenuItem = () => {
  const { id } = useParams();
  const kopi = useFetchKopi({});
  const menuItem = kopi.find((item) => item.id === parseInt(id));

  if (!menuItem) {
    return <div>Menu item not found</div>;
  }

  return (
    <div className="container mx-auto my-10 p-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <img src={menuItem.image} alt={menuItem.nama} className="w-full h-auto mb-4 rounded-lg" />
        <h1 className="text-4xl font-bold mb-4">{menuItem.nama}</h1>
        <p className="text-lg text-gray-700">{menuItem.deskripsi}</p>
        <p className="text-lg text-gray-700">{menuItem.harga}</p>
      </div>
    </div>
  );
};

export default MenuItem;

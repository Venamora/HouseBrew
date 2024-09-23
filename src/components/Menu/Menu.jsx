"use client";

import React, { useState } from "react";
import "./Menu.css";
import useFetchKopi from "../../hook/useFetchKopi";

const Menu = () => {
  const [filterQuery, setFilterQuery] = useState({});

  const kopi = useFetchKopi(filterQuery);

  const onChangeAttribute = (attribute) => (e) => {
    const newFilterQuery = {
      ...filterQuery,
      [attribute]: e.target.value,
    };

    if (newFilterQuery[attribute] !== filterQuery[attribute]) {
      setFilterQuery(newFilterQuery);
    }
  };

  return (
    <>
      <span id="menu"></span>
      <div className="py-10">
        <div className="container">
          {/* header and title */}
          <div className="text-center mb-20 flex flex-col gap-y-8">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Our Menu's
            </h1>
            <div className="flex flex-col gap-y-3 items-center">
              <div className="search-bar">
                <input
                  onChange={onChangeAttribute("nama")}
                  type="text"
                  placeholder="Search coffee"
                  className=" p-1 rounded-xl text-center border-[2px] border-primary text-primary placeholder:text-primary"
                />
              </div>
              <div className="flex flex-row gap-x-3">
                <div className="search-bar">
                  <input
                    onChange={onChangeAttribute("hargaMin")}
                    type="number"
                    placeholder="Minimum Price"
                    className=" p-1 rounded-xl text-center border-[2px] border-primary text-primary placeholder:text-primary"
                  />
                </div>
                <div className="search-bar">
                  <input
                    onChange={onChangeAttribute("hargaMax")}
                    type="number"
                    placeholder="Maximum Price"
                    className=" p-1 rounded-xl text-center border-[2px] border-primary text-primary placeholder:text-primary"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Menu Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 md:gap-6 place-items-center">
            {/* Display first 2 items (index 1 and 2) */}
            {kopi
              .filter((data, index) => index < 2)
              .map((data, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="flex flex-col items-center rounded-2xl bg-white hover:bg-primary hover text-white shadow-xl duration-200 max-w-[400px] group relative text-center"
                >
                  <img
                    src={data.image}
                    alt={data.nama}
                    className="w-[250px] block mx-auto transform -translate-y-1 group-hover:scale-110 group-hover:rotate-6 duration 200"
                  />
                  <h1 className="text-xl font-semibold text-gray-600 group-hover:text-white">
                    {data.nama}
                  </h1>
                  <p className="p-3 text-gray-600 group-hover:text-white">
                    {data.deskripsi}
                  </p>
                  <p className="p-3 text-gray-600 group-hover:text-white">
                    {data.harga}
                  </p>
                </div>
              ))}

            {/* Display next 2 items (index 3 and 4) */}
            {kopi
              .filter((data, index) => index >= 2 && index < 4)
              .map((data, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="flex flex-col items-center rounded-2xl bg-white hover:bg-primary hover text-white shadow-xl duration-200 max-w-[400px] group relative text-center"
                >
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-[250px] block mx-auto transform -translate-y-1 group-hover:scale-110 group-hover:rotate-6 duration 300"
                  />
                  <h1 className="text-xl font-semibold mt-2 text-gray-600 group-hover:text-white">
                    {data.name}
                  </h1>
                  <p className="p-3 text-gray-600 group-hover:text-white">
                    {data.description}
                  </p>
                  <p className="p-3 text-gray-600 group-hover:text-white">
                    {data.harga}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

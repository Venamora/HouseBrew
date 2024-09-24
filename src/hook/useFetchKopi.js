"use client";

import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { requestGetKopi } from "../helper/integration/Menu";
import americano from './../assets/americano.png';
import latte from './../assets/latte.png';
import cappuccino from './../assets/cappuccinoo.png';

const useFetchKopi = (
  filterQuery = { hargaMin: 0, hargaMax: 1000000, nama: "" },
  sortQuery = { order: "asc", sortBy: "nama" }
) => {
  const [data, setData] = useState([]);

  const stableQuery = useMemo(
    () => ({ ...filterQuery, ...sortQuery }),
    [JSON.stringify(filterQuery), JSON.stringify(sortQuery)]
  );

  const memoizedQuery = useMemo(() => ({ ...stableQuery }), [stableQuery]);

  const fetchKopi = useCallback(async () => {
    try {
      const data = await requestGetKopi(memoizedQuery);
      setData(data.data);
    } catch (err) {
      alert(err.message);
    }
  }, [memoizedQuery]);

  useEffect(() => {
    fetchKopi();

    const intervalId = setInterval(fetchKopi, 500);
    return () => clearInterval(intervalId);
  }, [fetchKopi]);

  const menu = [
    {
      id: 1,
      nama: "Espresso",
      deskripsi: "Rich and bold espresso.",
      harga: "50,000",
      image: americano, // Make sure this path is correct
    },
    {
      id: 2,
      nama: "Cappuccino",
      deskripsi: "Smooth and creamy cappuccino.",
      harga: "60,000",
      image: cappuccino,
    },
    {
      id: 3,
      name: "Latte",
      description: "Mild and milky latte.",
      harga: "55,000",
      img: latte,
    },
    {
      id: 4,
      name: "Americano",
      description: "Classic americano with water.",
      harga: "40,000",
      img: americano,
    },
  ]

  return data, menu;
};

export default useFetchKopi;

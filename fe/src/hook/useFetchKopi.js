"use client";

import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { requestGetKopi } from "../helper/integration/Menu";

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

  return data;
};

export default useFetchKopi;

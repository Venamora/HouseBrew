"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { requestGetKopi } from "../helper/integration/Menu";

const useFetchKopi = (
  filterQuery = {},
  sortQuery = { order: "asc", sortBy: "nama" }
) => {
  const [data, setData] = useState([]);

  const memoizedFilterQuery = useMemo(
    () => filterQuery,
    [JSON.stringify(filterQuery)]
  );
  const memoizedSortQuery = useMemo(
    () => sortQuery,
    [JSON.stringify(sortQuery)]
  );

  const fetchKopi = useCallback(async () => {
    try {
      const data = await requestGetKopi(memoizedFilterQuery, memoizedSortQuery);
      setData(data.data);
    } catch (err) {
      alert(err.message);
    }
  }, [memoizedFilterQuery, memoizedSortQuery]);

  useEffect(() => {
    fetchKopi();
  }, [memoizedFilterQuery, memoizedSortQuery]);

  return data;
};

export default useFetchKopi;

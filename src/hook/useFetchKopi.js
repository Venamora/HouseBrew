import { useState, useEffect, useCallback } from "react";
import { requestGetKopi } from "../helper/integration/Menu";

const useFetchKopi = (filterQuery = {}, sortBy = "asc") => {
  const [data, setData] = useState([]);

  const fetchKopi = useCallback(async () => {
    try {
      const data = await requestGetKopi(filterQuery, sortBy);
      setData(data.data);
    } catch (err) {
      alert(err.message);
    }
  }, [filterQuery, sortQuery]);

  useEffect(() => {
    fetchKopi();
  }, [fetchKopi, filterQuery, sortQuery]);

  return { data };
};

export default useFetchKopi;

import { useEffect, useState } from "react";
import FetchData from "../../service/fetchData";

const fetchData = new FetchData();

export function useLaunches() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData
      .getLaunches()
      .then((launches) => setData((state) => [...launches]));
  }, []);

  const getLaunch = (id) => data.find((item) => item.id === id);

  return { data, getLaunch };
}

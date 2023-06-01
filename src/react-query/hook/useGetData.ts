import axios from "axios";
import { useQuery } from "react-query";

import { Champion, Item } from "@/src/types";

const getData = async () => {
  const { data } = await axios.get(`/api`);
  return data;
};

export const useGetData = () => {
  return useQuery<{
    team1: {
      champion: Champion;
      items: {
        item1: Item;
        item2: Item;
        item3: Item;
        item4: Item;
        item5: Item;
        item6: Item;
      }[];
    }[];
    team2: {
      champion: Champion;
      items: {
        item1: Item;
        item2: Item;
        item3: Item;
        item4: Item;
        item5: Item;
        item6: Item;
      }[];
    }[];
  }>(["data"], getData, {
    onSuccess(data) {
      console.log(data);
    },
  });
};

import champions from "@/data/convert-champion.json";
import items from "@/data/convert-items.json";
import { shuffleArray } from "@/utils/shuffleArray";

import { Champion, Item } from "../types";
import { getRandomInt } from "./getRandomInt";
// champions
let randomArray = shuffleArray(champions);
const team1Champion: Champion[] = randomArray.splice(0, 16);

randomArray = shuffleArray(randomArray);
const team2Champion: Champion[] = randomArray.splice(0, 16);
// items

const legendaryItems = items.filter((i) => i.isLegendary);
const bootsItems = items.filter((i) => i.isBoots);
const otherItem = items.filter((i) => !(i.isBoots || i.isLegendary));
export const genRandomItem = () => {
  const indexLegendaryItem = getRandomInt(0, legendaryItems.length - 1);
  const item1 = legendaryItems[indexLegendaryItem];
  const indexBootsItem = getRandomInt(0, bootsItems.length - 1);
  const item2 = bootsItems[indexBootsItem];
  const newOtherItem: Item[] = shuffleArray([...otherItem]);
  const item3 = newOtherItem.pop();
  const item4 = newOtherItem.pop();
  const item5 = newOtherItem.pop();
  const item6 = newOtherItem.pop();
  return { item1, item2, item3, item4, item5, item6 };
};

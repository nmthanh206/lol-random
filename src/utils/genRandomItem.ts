import items from "@/data/convert-items.json";
import { shuffleArray } from "@/utils/shuffleArray";

import { Champion, Item } from "../types";
import { getRandomInt } from "./getRandomInt";

const legendaryItems2 = items.filter((i) => i.isLegendary);
const otherItem2 = items.filter((i) => !(i.isBoots || i.isLegendary));
const bootsItems = items.filter((i) => i.isBoots);
const legendaryItemsNoDamage = legendaryItems2.filter((i) => i.isNoDamage);
const otherItemNoDamage = otherItem2.filter((i) => i.isNoDamage);
export const genRandomItem = (champion: Champion, isNoDamage: boolean) => {
  let legendaryItems = legendaryItems2;
  let otherItem = otherItem2;
  if (isNoDamage) {
    legendaryItems = legendaryItemsNoDamage;
    otherItem = otherItemNoDamage;
  }
  const indexLegendaryItem = getRandomInt(0, legendaryItems.length - 1);
  const item1 = legendaryItems[indexLegendaryItem];
  const indexBootsItem = getRandomInt(0, bootsItems.length - 1);
  const item2 = bootsItems[indexBootsItem];
  const championItems: Item[] = [item1, item2];
  let newOtherItem: Item[] = [...otherItem];
  while (championItems.length < 6) {
    let skip = false;
    newOtherItem = shuffleArray([...newOtherItem]);
    const item = newOtherItem.pop();
    for (const { groupName } of championItems) {
      if (item.groupName) {
        for (const gn1 of item.groupName) {
          for (const gn2 of groupName || []) {
            if (gn1 === gn2) {
              skip = true;
              break;
            }
          }
          if (skip) break;
        }
      }
    }
    if (skip || (champion.isMelee && item.itemName === "Runaan's Hurricane")) {
      continue;
    }

    championItems.push(item);
  }

  return championItems;
};

/* eslint-disable no-var */

import { Champion, Item } from ".";

/* eslint-disable vars-on-top */
declare global {
  var numItem: number;
  var numChamp: number;
  var isNoDamage: boolean;
  var version: string;
  var data: {
    team1: {
      champion: Champion;
      items: Item[][];
    }[];
    team2: {
      champion: Champion;
      items: Item[][];
    }[];
  };
}

export {};

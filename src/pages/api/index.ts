import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

// import champions from "@/data/convert-champion.json";
import { Champion } from "@/src/types";
import { genRandomItem } from "@/src/utils/genRandomItem";
import { shuffleArray } from "@/src/utils/shuffleArray";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method.toUpperCase() === "GET") {
    if (req.query?.reset) {
      // global.data = null;
      global.numItem = 2;
      global.numChamp = 16;
      global.isNoDamage = false;
      global.version = "13.16.1";
      return res.status(200).json({
        message: "Oke",

        numChamp: global.numChamp,
        numItem: global.numItem,
        isNoDamage: global.isNoDamage,
        version: global.version,
      });
    }
    if (req.query?.clear) {
      global.data = null;
      return res.status(200).json({
        message: "Oke",
        data: global.data,
        numChamp: global.numChamp,
        numItem: global.numItem,
        isNoDamage: global.isNoDamage,
      });
    }
    if (req.query?.config) {
      global.numItem = Number(req.query?.numItem) || global.numItem;
      global.numChamp = Number(req.query?.numChamp) || global.numChamp;
      global.isNoDamage = req.query?.isNoDamage === "true" || global.isNoDamage;
      global.version = (req.query?.version as string) || "13.16.1";
      // global.data = null;

      return res.status(200).json({
        message: "Oke",
        numChamp: global.numChamp,
        numItem: global.numItem,
        isNoDamage: global.isNoDamage,
        version: global.version,
      });
    }
    if (req.query?.data) {
      return res.status(200).json({ global });
    }
    if (global.data) {
      return res.status(200).json(global.data);
    }
    const result = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/${
        global.version || "13.16.1"
      }/data/en_US/champion.json`,
    );
    const champions = Object.entries<any>(result.data.data).map(
      ([
        championName,
        {
          image: { full },
          stats: { attackrange },
          key,
        },
      ]) => {
        return {
          championName,
          image: `http://ddragon.leagueoflegends.com/cdn/${
            global.version || "13.16.1"
          }/img/champion/${full}`,
          id: key,
          isMelee: attackrange <= 200,
          isRange: attackrange > 200,
        };
      },
    );
    let randomArray = shuffleArray(champions);
    const team1Champion: Champion[] = randomArray.splice(
      0,
      global.numChamp || 16,
    );

    randomArray = shuffleArray(randomArray);
    const team2Champion: Champion[] = randomArray.splice(
      0,
      global.numChamp || 16,
    );
    const team1 = team1Champion.map((champion) => {
      return {
        champion,
        items: Array(global.numItem || 2)
          .fill(0)
          .map(() => genRandomItem(champion, global.isNoDamage || false)),
      };
    });
    const team2 = team2Champion.map((champion) => {
      return {
        champion,
        items: Array(global.numItem || 2)
          .fill(0)
          .map(() => genRandomItem(champion, global.isNoDamage || false)),
      };
    });
    const data = { team1, team2 };
    global.data = data;
    res.status(200).json(data);
  }
  if (req.method.toUpperCase() === "POST") {
    global.data = null;
    res.status(200).json({ message: "Ok" });
  }
}

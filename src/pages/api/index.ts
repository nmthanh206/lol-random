import type { NextApiRequest, NextApiResponse } from "next";

import champions from "@/data/convert-champion.json";
import { Champion } from "@/src/types";
import { genRandomItem } from "@/src/utils/genRandomItem";
import { shuffleArray } from "@/src/utils/shuffleArray";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method.toUpperCase() === "GET") {
    if (req.query?.clear) {
      (global as any).data = null;
      return res.status(200).json({ message: "Oke" });
    }
    if ((global as any).data) {
      return res.status(200).json((global as any).data);
    }
    let randomArray = shuffleArray(champions);
    const team1Champion: Champion[] = randomArray.splice(0, 16);

    randomArray = shuffleArray(randomArray);
    const team2Champion: Champion[] = randomArray.splice(0, 16);
    const team1 = team1Champion.map((champion) => {
      return {
        champion,
        items: Array(3)
          .fill(0)
          .map(() => genRandomItem()),
      };
    });
    const team2 = team2Champion.map((champion) => {
      return {
        champion,
        items: Array(3)
          .fill(0)
          .map(() => genRandomItem()),
      };
    });
    const data = { team1, team2 };
    (global as any).data = data;
    res.status(200).json(data);
  }
  if (req.method.toUpperCase() === "POST") {
    (global as any).data = null;
    res.status(200).json({ message: "Ok" });
  }
}

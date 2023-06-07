/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { Champion, Item } from "../types";

function useIsClient() {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient;
}
const Detail = () => {
  const router = useRouter();
  const isClient = useIsClient();
  if (!isClient) return null;
  const { champion, arrayItems }: { champion: Champion; arrayItems: Item[] } =
    JSON.parse(router.query.data as string);
  return (
    <div className="mt-20 space-y-3">
      <div className="text-center">
        <img
          src={champion.image}
          alt={champion.image}
          className="inline-block w-[20%]"
        />
      </div>
      <div className="space-x-2 text-center">
        {arrayItems.map((item) => {
          return (
            <img
              key={item.image}
              src={item.image}
              alt={item.itemName}
              className="inline-block w-[12%] rounded-md"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Detail;

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import { useGetData } from "../react-query/hook/useGetData";

export default function Home() {
  const { data, isLoading, isFetching } = useGetData();

  return (
    <div className="min-h-screen">
      {!isLoading && (
        <div>
          <div className="flex">
            <div className="flex-1 p-2">
              <div className="flex flex-wrap justify-evenly">
                {data.team1.map(({ champion, items }) => {
                  return (
                    <div key={champion.id} className="flex p-1">
                      <div className="w-[120px]">
                        <img
                          src={champion.image}
                          alt={champion.championName}
                          width={200}
                        />
                      </div>
                      <div className="flex flex-col flex-1 justify-around">
                        {items.map((arrayItems, i) => {
                          return (
                            <Link
                              key={i}
                              href={`/detail?data=${JSON.stringify({
                                champion,
                                arrayItems,
                              })}`}
                            >
                              <a className="flex">
                                {arrayItems.map((item) => {
                                  return (
                                    <img
                                      key={item.image}
                                      src={item.image}
                                      alt={item.itemName}
                                      className="block w-10"
                                    />
                                  );
                                })}
                              </a>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[1px] bg-black"></div>
            <div className="flex-1 p-2">
              <div className="flex flex-wrap justify-evenly">
                {data.team2.map(({ champion, items }) => {
                  return (
                    <div key={champion.id} className="flex p-1">
                      <div className="w-[120px]">
                        <img
                          src={champion.image}
                          alt={champion.championName}
                          width={200}
                        />
                      </div>
                      <div className="flex flex-col flex-1 justify-around">
                        {items.map((arrayItems, i) => {
                          return (
                            <Link
                              key={i}
                              href={`/detail?data=${JSON.stringify({
                                champion,
                                arrayItems,
                              })}`}
                            >
                              <a className="flex">
                                {arrayItems.map((item) => {
                                  return (
                                    <img
                                      key={item.image}
                                      src={item.image}
                                      alt={item.itemName}
                                      className="block w-10"
                                    />
                                  );
                                })}
                              </a>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */

import { useGetData } from "../react-query/hook/useGetData";
import { useMutationRefetch } from "../react-query/hook/useMutationRefetch";

export default function Home() {
  const { data, isLoading, isFetching } = useGetData();
  const { mutate } = useMutationRefetch();

  return (
    <div className="min-h-screen">
      {!isLoading && (
        <div>
          <div className="text-center">
            <button
              className="py-2 px-4 mt-3 text-blue-100 bg-blue-500 hover:bg-blue-600 rounded-lg duration-300"
              onClick={() => mutate()}
              disabled={isLoading || isFetching}
            >
              Random
            </button>
          </div>
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
                      <div className="flex-1">
                        {items.map(
                          ({ item1, item2, item3, item4, item5, item6 }, i) => {
                            return (
                              <div key={i} className="flex">
                                <img
                                  src={item1.image}
                                  alt={item1.itemName}
                                  className="block w-10"
                                />
                                <img
                                  src={item2.image}
                                  alt={item2.itemName}
                                  className="block w-10"
                                />
                                <img
                                  src={item3.image}
                                  alt={item3.itemName}
                                  className="block w-10"
                                />
                                <img
                                  src={item4.image}
                                  alt={item4.itemName}
                                  className="block w-10"
                                />
                                <img
                                  src={item5.image}
                                  alt={item5.itemName}
                                  className="block w-10"
                                />
                                <img
                                  src={item6.image}
                                  alt={item6.itemName}
                                  className="block w-10"
                                />
                              </div>
                            );
                          },
                        )}
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
                      <div className="flex-1">
                        {items.map(
                          ({ item1, item2, item3, item4, item5, item6 }, i) => {
                            return (
                              <div key={i} className="flex">
                                <img
                                  src={item1.image}
                                  alt={item1.itemName}
                                  className="block w-10"
                                />
                                <img
                                  src={item2.image}
                                  alt={item2.itemName}
                                  className="block w-10"
                                />
                                <img
                                  src={item3.image}
                                  alt={item3.itemName}
                                  className="block w-10"
                                />
                                <img
                                  src={item4.image}
                                  alt={item4.itemName}
                                  className="block w-10"
                                />
                                <img
                                  src={item5.image}
                                  alt={item5.itemName}
                                  className="block w-10"
                                />
                                <img
                                  src={item6.image}
                                  alt={item6.itemName}
                                  className="block w-10"
                                />
                              </div>
                            );
                          },
                        )}
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

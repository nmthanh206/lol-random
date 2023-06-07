export type Champion = {
  championName: string;
  image: string;
  id: string;
  isMelee: boolean;
  isRange: boolean;
};

export type Item = {
  itemName: string;
  image: string;
  isBoots: boolean;
  isNoDamage: boolean;
  isLegendary: boolean;
  groupName: string[] | null;
  id: string;
};

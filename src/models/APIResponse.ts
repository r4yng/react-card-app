export interface APIResponse {
  _pageSize: number;
  _totalCount: number;
  _links: { next: string; prev: string };
  cards: [
    {
      name: string;
      text: string;
      collectible: boolean;
      rarity: string;
      type: string;
      subtypes?: string[];
      cost: number;
      power: number;
      health: number;
      set: {
        id: string;
        name: string;
        _self: string;
      };
      soulSummon?: number;
      soulTrap?: number;
      attributes: string[];
      keywords: string[];
      unique: string;
      imageUrl: string;
      id: string;
    }
  ];
}

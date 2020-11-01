export interface IProps {}

export interface IState {
  filter: string;
  error: string | null;
  items: ICard[];
  nextUrl: string | null;
  hasMoreItems: boolean;
}

export interface ICard {
  name: string;
  text: string;
  imageUrl: string;
  type: string;
  setName: string;
}
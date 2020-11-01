export interface IProps {}

export interface IState {
  error: string | null;
  isLoaded: boolean;
  items: ICard[];
}

export interface ICard {
  name: string;
  text: string;
  imageUrl: string;
  type: string;
  setName: string;
}
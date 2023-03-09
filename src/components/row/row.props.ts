import { IMovie } from "./../../interface/app.interface";
export interface RowProps {
  title: string;
  movies: IMovie[];
  isBig?: boolean;
}

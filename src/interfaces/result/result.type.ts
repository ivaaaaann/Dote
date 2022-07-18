import { Response } from "../util/response.type";
import { Vote } from "../vote/vote.type";

export interface Result extends Vote {}

export interface ResultDetail {
  name: string;
  vote_count: number;
}

export interface ResultDetailResponse extends Response {
  content: ResultDetail[];
}

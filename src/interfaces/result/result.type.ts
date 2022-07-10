import { Vote } from "../common/common.type";
import { Response } from "../util/response.type";

export interface Result extends Vote {}

export interface ResultDetail extends Vote {
  point: number;
}

export interface ResultDetailResponse extends Response {
  data: ResultDetail[];
}

import { Vote } from "../common/common.type";

export interface VotesResponse extends Response {
  content: Vote[];
}

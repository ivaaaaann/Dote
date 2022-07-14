import { VotesResponse } from "../../interfaces/vote/vote.type";
import { customAxios } from "../../lib/axios/customAxios";
import { getVotesParam } from "./vote.param";

class VoteRepository {
  public async getVotes({ page }: getVotesParam): Promise<VotesResponse> {
    const { data } = await customAxios.get(`/vote?page=${page}`);
    console.log(data);
    return data;
  }
}

export default new VoteRepository();

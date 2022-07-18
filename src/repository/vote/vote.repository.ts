import { VoteResponse, VotesResponse } from "../../interfaces/vote/vote.type";
import { customAxios } from "../../lib/axios/customAxios";
import { getVoteParam, getVotesParam, postVoteParam, postCreateVoteParam } from "./vote.param";

class VoteRepository {
  public async getVotes({ page }: getVotesParam): Promise<VotesResponse> {
    const { data } = await customAxios.get<VotesResponse>(`/vote?page=${page}`);
    console.log("getVotes " + data.content);
    return data;
  }

  public async getVote({ voteId }: getVoteParam): Promise<VoteResponse> {
    const { data } = await customAxios.get<VoteResponse>(`/vote/${voteId}`);
    console.log("getVote " + data.content);
    return data;
  }

  public async postVote({ voteId, teamId }: postVoteParam): Promise<void> {
    await customAxios.post(`/vote/${voteId}/ballot`, { team_id: teamId });
  }

  public async createVote(voteInfo: postCreateVoteParam): Promise<void> {
    await customAxios.post(`/vote`, voteInfo);
  }
}

export default new VoteRepository();

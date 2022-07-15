export interface getVotesParam {
  page: number;
}

export interface getVoteParam {
  voteId: number;
}

export interface postVoteParam {
  voteId: number;
  teamId: number;
}

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

type voteItmes = { name: string }

export interface postCreateVoteParam {
  title: string,
  items: voteItmes[],
  end_time: string
}
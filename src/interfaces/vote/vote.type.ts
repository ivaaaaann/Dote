export interface Vote {
  id: number;
  title: string;
  end_time: string;
}

export interface VoteDetail {
  id: number;
  name: string;
}

export interface VotesResponse extends Response {
  content: Vote[];
}

export interface VoteResponse extends Response {
  content: VoteDetail[];
}


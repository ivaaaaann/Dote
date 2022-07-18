export interface Vote {
  id: number;
  title: string;
  endTime: string;
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


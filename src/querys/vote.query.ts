import { AxiosError } from "axios";
import {
  useMutation,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { VoteResponse, VotesResponse } from "../interfaces/vote/vote.type";
import {
  getVoteParam,
  getVotesParam,
  postVoteParam,
} from "../repository/vote/vote.param";
import voteRepository from "../repository/vote/vote.repository";

export const useGetVotes = (
  { page }: getVotesParam,
  options?: UseQueryOptions<
    VotesResponse,
    AxiosError,
    VotesResponse,
    ["vote/getVotes", typeof page]
  >
): UseQueryResult<VotesResponse, AxiosError> =>
  useQuery(
    ["vote/getVotes", page],
    () => voteRepository.getVotes({ page }),
    options
  );

export const useGetVote = (
  { voteId }: getVoteParam,
  options?: UseQueryOptions<
    VoteResponse,
    AxiosError,
    VoteResponse,
    ["vote/getVote", typeof voteId]
  >
): UseQueryResult<VoteResponse, AxiosError> =>
  useQuery(
    ["vote/getVote", voteId],
    () => voteRepository.getVote({ voteId }),
    options
  );

export const usePostVote = () => {
  const mutation = useMutation(({ voteId, teamId }: postVoteParam) =>
    voteRepository.postVote({ voteId, teamId })
  );

  return mutation;
};

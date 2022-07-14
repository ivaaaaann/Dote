import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { VotesResponse } from "../interfaces/vote/vote.type";
import { getVotesParam } from "../repository/vote/vote.param";
import voteRepository from "../repository/vote/vote.repository";

export const useGetVotes = (
  { page }: getVotesParam,
  options?: UseQueryOptions<
    VotesResponse,
    AxiosError,
    VotesResponse,
    "vote/getVotes"
  >
): UseQueryResult<VotesResponse, AxiosError> =>
  useQuery("vote/getVotes", () => voteRepository.getVotes({ page }), options);

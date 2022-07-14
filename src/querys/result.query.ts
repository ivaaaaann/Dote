import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { ResultDetailResponse } from "../interfaces/result/result.type";
import { getResultDetailParam } from "../repository/result/result.param";
import resultRepository from "../repository/result/result.repository";

export const useGetResultDetail = (
  { id }: getResultDetailParam,
  options?: UseQueryOptions<
    ResultDetailResponse,
    AxiosError,
    ResultDetailResponse,
    "result/getResultDetail"
  >
): UseQueryResult<ResultDetailResponse, AxiosError> =>
  useQuery(
    "result/getResultDetail",
    () => resultRepository.getResultDetail({ id }),
    options
  );

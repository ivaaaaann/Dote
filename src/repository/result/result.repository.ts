import { ResultDetailResponse } from "../../interfaces/result/result.type";
import { customAxios } from "../../lib/axios/customAxios";
import { getResultDetailParam } from "./result.param";

class ResultRepository {
  public async getResultDetail({
    id,
  }: getResultDetailParam): Promise<ResultDetailResponse> {
    const { data } = await customAxios.get<ResultDetailResponse>(
      `/vote/${id}/ballot`
    );
    return data;
  }
}

export default new ResultRepository();

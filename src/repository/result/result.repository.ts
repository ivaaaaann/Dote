import { ResultDetailResponse } from "../../interfaces/result/result.type";
import { customAxios } from "../../lib/axios/customAxios";
import { getResultDetail } from "./result.param";

class ResultRepository {
  public async getResultDetail({
    id,
  }: getResultDetail): Promise<ResultDetailResponse> {
    const { data } = await customAxios.get(`/result/detail/${id}`);
    return data;
  }
}

export default new ResultRepository();

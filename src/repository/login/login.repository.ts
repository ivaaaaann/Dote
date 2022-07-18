import { customAxios } from "../../lib/axios/customAxios";

class LoginRepsitory {
    public async tryLogin(code: string): Promise<any> {
        const { data } = await customAxios.post(`/auth/login`, { code });
        return data;
    }
}

export default new LoginRepsitory();

import { AuthResponse } from './../../interfaces/user/user.type';
import { customAxios } from "../../lib/axios/customAxios";
class LoginRepsitory {
    public async tryLogin(code: string): Promise<AuthResponse> {
        const { data } = await customAxios.post(`/auth/login`, { code });
        return data;
    }
}

export default new LoginRepsitory();

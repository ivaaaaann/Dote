import { atom } from "recoil";
import { User } from "../../interfaces/user/user.type"
export const userAtom = atom<User>({
    key: "userAtom",
    default: {
        id: "",
        grade: "",
        room: "",
        number: "",
        role: ""
    },
});

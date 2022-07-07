import { atom } from "recoil";
import { ETheme } from "../../enum/theme/theme.eunm";
import { getTheme } from "../../utils/theme/getTheme";

export const themeModeAtom = atom<ETheme>({
  key: "theme/themeModeAtom",
  default: getTheme(),
});

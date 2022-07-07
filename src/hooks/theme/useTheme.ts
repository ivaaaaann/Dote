import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { DefaultTheme } from "styled-components";
import { THEME_KEY } from "../../constants/theme/theme.contant";
import { ETheme } from "../../enum/theme/theme.eunm";
import { themeModeAtom } from "../../store/theme/themeStore";
import { darkTheme, lightTheme } from "../../style/theme";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ETheme>(themeModeAtom);

  const { DARK, LIGHT } = ETheme;

  const themeColor = useMemo((): DefaultTheme => {
    return currentTheme === DARK ? darkTheme : lightTheme;
  }, [DARK, currentTheme]);

  const handleTheme = useCallback((): void => {
    const switchTheme = currentTheme === DARK ? LIGHT : DARK;
    localStorage.setItem(THEME_KEY, String(switchTheme));
    setCurrentTheme(switchTheme);
  }, [DARK, LIGHT, currentTheme, setCurrentTheme]);

  return {
    themeColor,
    handleTheme,
  };
};

export default useTheme;

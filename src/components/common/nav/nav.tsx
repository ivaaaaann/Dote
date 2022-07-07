import useNav from "../../../hooks/common/useNav";
import { NavContainer, NavTitle, NavDarkmodeButton } from "./style";
import { HiOutlineSun } from "react-icons/hi";
import { BiMoon } from "react-icons/bi";
import { ETheme } from "../../../enum/theme/theme.eunm";
import { useRecoilValue } from "recoil";
import { themeModeAtom } from "../../../store/theme/themeStore";
import useTheme from "../../../hooks/theme/useTheme";

const Nav = () => {
  const { isScroll } = useNav();
  const { handleTheme } = useTheme();
  const currentTheme = useRecoilValue(themeModeAtom);

  return (
    <NavContainer isScroll={isScroll}>
      <NavTitle>DOTE</NavTitle>
      <NavDarkmodeButton onClick={handleTheme}>
        {currentTheme === ETheme.LIGHT ? <HiOutlineSun /> : <BiMoon />}
      </NavDarkmodeButton>
    </NavContainer>
  );
};

export default Nav;

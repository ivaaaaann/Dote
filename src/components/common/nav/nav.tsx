import useNav from "../../../hooks/common/useNav";
import { NavContainer, NavTitle } from "./style";

const Nav = () => {
  const { isScroll } = useNav();

  return (
    <NavContainer isScroll={isScroll}>
      <NavTitle>DOTE</NavTitle>
    </NavContainer>
  );
};

export default Nav;

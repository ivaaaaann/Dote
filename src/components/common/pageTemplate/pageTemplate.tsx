import { ReactNode, useEffect, useState } from "react";
import { ACCESS_KEY } from "../../../constants/auth/auth.contant";
import localStorage from "../../../lib/localStorage/localStorage";
import Nav from "../nav/nav";
import SectionTab from "../sectionTab/sectionTab";
import { PageTemplateContainer, PageTemplateWrap } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(ACCESS_KEY)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <PageTemplateContainer>
      <Nav />
      <PageTemplateWrap>
        {isLogin && <SectionTab />}
        {children}
      </PageTemplateWrap>
    </PageTemplateContainer>
  );
};

export default PageTemplate;

import { ReactNode } from "react";
import Nav from "../nav/nav";
import { PageTemplateContainer } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateContainer>
      <Nav />
      {children}
    </PageTemplateContainer>
  );
};

export default PageTemplate;

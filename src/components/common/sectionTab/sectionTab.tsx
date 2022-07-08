import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SECTION_TAB_ITEMS } from "../../../constants/common/sectionTab.constant";
import { SectionTabContainer, SectionTabItem } from "./style";

const SectionTab = () => {
  const navigate = useNavigate();
  const [section, setSection] = useState<String>("투표 목록");

  return (
    <SectionTabContainer>
      {SECTION_TAB_ITEMS.map((sectionItem) => (
        <SectionTabItem
          isSelected={section === sectionItem.title}
          onClick={() => {
            setSection(sectionItem.title);
            navigate(sectionItem.link);
          }}
        >
          {sectionItem.title}
        </SectionTabItem>
      ))}
    </SectionTabContainer>
  );
};

export default SectionTab;

import useVoteForm from "../../../hooks/admin/useVoteForm";
import { CreateBtn, Container, AddBtn, VoteInput, DeleteBtn } from "./style";
import CustomInput from "../../common/input/customInput";
import { BsPlusCircleFill, BsPlusCircle } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { ETheme } from "../../../enum/theme/theme.eunm";
import { useRecoilValue } from "recoil";
import { themeModeAtom } from "../../../store/theme/themeStore";
import { VoteDetail } from "../../../interfaces/common/common.type";
const VoteForm = () => {
  const {
    voteItems,
    setVoteItems,
    handleChangeVoteItem,
    addVoteItem,
    deleteVoteItem,
  } = useVoteForm();
  const currentTheme = useRecoilValue(themeModeAtom);
  return (
    <Container>
      <CustomInput placeholder="title" />
      <input type={"datetime-local"} id="date" />
      <>
        {voteItems.map((voteItem: VoteDetail, idx) => {
          const { id, voteTitle } = voteItem;
          return (
            <div style={{ display: "flex" }}>
              <VoteInput
                key={idx}
                placeholder="항목을 입력해주세요"
                value={voteTitle}
                onChange={(e) => {
                  handleChangeVoteItem(e.target.value, id);
                }}
              />
              <DeleteBtn
                key={idx}
                onClick={() => {
                  deleteVoteItem(id);
                }}
              >
                {currentTheme === ETheme.LIGHT ? (
                  <AiTwotoneDelete size={"20px"} />
                ) : (
                  <AiTwotoneDelete size={"20px"} color="white" />
                )}
              </DeleteBtn>
            </div>
          );
        })}
      </>

      <div style={{ display: "flex", alignItems: "center" }}>
        <AddBtn
          onClick={() => {
            addVoteItem();
          }}
        >
          {currentTheme === ETheme.LIGHT ? (
            <BsPlusCircleFill size={"20px"} />
          ) : (
            <BsPlusCircle size={"35px"} color="white" />
          )}
        </AddBtn>
        <p>항목추가</p>
      </div>

      <CreateBtn>생성</CreateBtn>
    </Container>
  );
};

export default VoteForm;

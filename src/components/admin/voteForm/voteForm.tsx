import useVoteForm from "../../../hooks/admin/useVoteForm";
import { CreateBtn, Container, AddBtn, VoteInput, DeleteBtn } from "./style";
import CustomInput from "../../common/input/customInput";
import { BsPlusCircleFill, BsPlusCircle } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { ETheme } from "../../../enum/theme/theme.eunm";
import { useRecoilValue } from "recoil";
import { themeModeAtom } from "../../../store/theme/themeStore";
import { VoteDetail } from "../../../interfaces/vote/vote.type";
import { useState } from "react";

const VoteForm = () => {
  const {
    voteItems,
    setTitle,
    setDate,
    handleChangeVoteItem,
    addVoteItem,
    deleteVoteItem,
    createVote,
  } = useVoteForm();

  const currentTheme = useRecoilValue(themeModeAtom);

  return (
    <Container>
      <CustomInput type={"text"} placeholder="제목" setValue={setTitle} />
      <CustomInput type={"datetime-local"} setValue={setDate} />
      <>
        {voteItems.map((voteItem: VoteDetail, idx) => {
          const { id, name } = voteItem;
          return (
            <div style={{ display: "flex" }} key={idx}>
              <VoteInput
                placeholder="항목을 입력해주세요"
                onChange={(e) => {
                  handleChangeVoteItem(e.target.value, id);
                }}
              />
              <DeleteBtn
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

      <CreateBtn
        onClick={() => {
          createVote();
        }}
      >
        생성
      </CreateBtn>
    </Container>
  );
};

export default VoteForm;

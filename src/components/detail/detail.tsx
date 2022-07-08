import { VoteDetail } from "../../interfaces/common/common.type";
import DetailItem from "./detailItem/detailItem";
import { DetailContainer } from "./style";

const test: VoteDetail[] = [
  { id: 1, voteTitle: "레드벨벳" },
  { id: 2, voteTitle: "아이브" },
  { id: 3, voteTitle: "트와이스" },
  { id: 4, voteTitle: "블랙핑크" },
  { id: 5, voteTitle: "ITZY" },
  { id: 6, voteTitle: "에스파" },
  { id: 7, voteTitle: "스테이시" },
  { id: 8, voteTitle: "르세라핌" },
];

const Detail = () => {
  return (
    <DetailContainer>
      {test.map((item) => (
        <DetailItem voteDetailData={item} />
      ))}
    </DetailContainer>
  );
};

export default Detail;

import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

export const CreationCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white border border-[#8E8E93] p-4 rounded-[16px] flex justify-between items-center 
      h-[207px] w-full
      cursor-pointer hover:brightness-95"
    >
      <div className="flex flex-col gap-y-6 justify-start ml-[96px]">
        <h2 className="text-[40px] font-bold">새로운 여행 일정 추가</h2>
        <p className="text-[24px]">
          여행을 떠나기 위한 계획과 예산을 함께 세워볼까요?
        </p>
      </div>
      <Button
        type={"submit"}
        icon={{
          location: "left",
          iconName: "plus",
          size: 48,
          color: "#1C1B1F",
        }}
        buttonStyle="mr-[80px]"
      />
    </div>
  );
};

// 날짜 YYYY-MM-DD 형식으로 출력
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

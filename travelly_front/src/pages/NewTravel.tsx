import { Button, Calendar, InputField, StepHeadline } from "../components";

const NewTravel1 = () => {
  return <StepHeadline headline="Step 1. 여행지 선택하기" />;
};

const NewTravel2 = () => {
  return (
    <div>
      <section className="flex justify-between items-center">
        <StepHeadline
          headline="Step 2. 여행 일정 선택하기"
          body="여행을 떠날 날짜와 돌아올 날짜를 선택해 주세요"
        />
        <Button
          label="다음 페이지로"
          type="button"
          buttonStyle="bg-main h-[76px] px-10 text-[24px] text-point"
        />
      </section>
      <section>
        <Calendar />
      </section>
    </div>
  );
};

const NewTravel3 = () => {
  return (
    <div>
      <StepHeadline
        headline="Step 3. 여행 이름 설정하기"
        body="이번 여행의 이름을 지어주세요. 지은 이름은 나의 여행 목록의 제목으로 보이게 됩니다."
      />
      <section className="flex gap-x-[10px] w-full justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <InputField
          type="text"
          placeholder="여행 이름을 지어주세요"
          inputStyle="text-[24px] h-[65px] w-[693px] px-8"
        />
        <Button
          label="완료"
          type="button"
          buttonStyle="bg-main h-[65px] px-10 text-[24px] text-point"
        />
      </section>
    </div>
  );
};

const NewTravel = () => {
  return <></>;
};

export default NewTravel;

import { useState } from "react";
import { Button, InputField, StepHeadline } from "../components";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
const NewTravel = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [travelName, setTravelName] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleCreateTravel = async () => {
    try {
      const response = await axios.post("/api/travels/create", {
        id: localStorage.getItem("userId"),
        startDate,
        endDate,
        travelName,
        location,
      });

      navigate("/main"); // 혹은 원하는 페이지로 이동
    } catch (err) {
      alert(err);
    }
  };
  // Step 1
  const Step1 = () => (
    <div>
      <StepHeadline headline="Step 1. 여행지 선택하기" />
      <section className="flex gap-x-[10px] w-full justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <InputField
          type="text"
          placeholder="여행지를 입력해주세요"
          value={location}
          inputStyle="text-[24px] h-[65px] w-[693px] px-8"
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button
          label="다음"
          type="button"
          onActionClick={() => setStep(2)}
          buttonStyle="bg-main h-[65px] px-10 text-[24px] text-point"
        />
      </section>
    </div>
  );

  // Step 2
  const Step2 = ({ onNext }: { onNext: () => void }) => {
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
            onActionClick={onNext}
            disabled={!startDate || !endDate}
          />
        </section>

        <section className="mt-8 flex flex-col gap-6 items-start">
          <div className="flex flex-col">
            <label className="mb-2 text-xl font-medium">출발 날짜</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="yyyy-MM-dd"
              placeholderText="출발일 선택"
              className="border border-gray-300 rounded px-4 py-2 text-lg"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-xl font-medium">도착 날짜</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate ?? undefined}
              dateFormat="yyyy-MM-dd"
              placeholderText="도착일 선택"
              className="border border-gray-300 rounded px-4 py-2 text-lg"
            />
          </div>
        </section>
      </div>
    );
  };

  // Step 3
  const Step3 = () => (
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
          value={travelName}
          onChange={(e) => setTravelName(e.target.value)}
        />
        <Button
          label="완료"
          type="button"
          onActionClick={() => handleCreateTravel}
          buttonStyle="bg-main h-[65px] px-10 text-[24px] text-point"
        />
      </section>
    </div>
  );

  // 현재 단계 렌더링
  return (
    <div className="relative min-h-screen bg-white p-8">
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 onNext={() => setStep(3)} />}
      {step === 3 && <Step3 />}
    </div>
  );
};

export default NewTravel;

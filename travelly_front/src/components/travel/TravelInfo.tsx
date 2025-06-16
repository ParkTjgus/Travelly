import { formatDate } from "../../utils/formatDate";
import Button from "../common/Button";

interface TravelInfoProps {
  travelId: string;
  name: string;
  startDate: Date;
  endDate: Date;
  price: number;
}

const TravelInfo = (props: TravelInfoProps) => {
  return (
    <section className="flex flex-col w-1/3 rounded-[16px] bg-main">
      <div className="flex flex-col gap-y-[18px]">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-[40px] font-bold">{props.name}</h1>
          <p className="text-[24px]">{`${formatDate(
            props.startDate
          )} ~ ${formatDate(props.endDate)}`}</p>
        </div>
        <Button
          label="친구 초대하기"
          type={"button"}
          buttonStyle="w-[160px] bg-white border border-point"
        ></Button>
      </div>
      <div>
        <p className="text-[20px]">총 사용 금액</p>
        <p className="text-[32px] font-medium">{`- ${props.price}원`}</p>
      </div>
    </section>
  );
};

export default TravelInfo;

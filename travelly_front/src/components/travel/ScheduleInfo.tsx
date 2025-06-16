import Button from "../common/Button";

interface ScheduleInfoProps {
  _id: string;
  content: string;
  startDate: string;
  startTime: string;
  endTime: string;
  price: number;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ScheduleInfo = (props: ScheduleInfoProps) => {
  return (
    <div className="flex w-full justify-between items-center">
      <span className="text-[24px]">{`[${props.startTime} ~ ${props.endTime}] ${props.content}`}</span>
      <div className="flex gap-x-[24px]">
        <span className="text-[24px]">{`- ${props.price}원`}</span>
        <div className="flex justify-center items-center gap-x-[16px] ">
          <Button
            type="button"
            icon={{ location: "left", iconName: "edit", size: 24 }}
          />
          <Button
            type="button"
            icon={{ location: "left", iconName: "trash", size: 24 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleInfo;

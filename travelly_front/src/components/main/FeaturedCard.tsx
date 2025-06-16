import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { formatDate } from "../../utils/formatDate";

interface FeaturedCardProps {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  onActionClick: () => void;
  onDelete: (id: string) => void;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = (
  props: FeaturedCardProps
) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/travel/${props.id}`);
  };

  return (
    <div
      className="bg-main p-4 rounded-[16px] flex justify-between items-center 
      h-[207px] w-full
      cursor-pointer hover:brightness-95"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-y-6 justify-start ml-[96px]">
        <h2 className="text-[40px] font-bold">{props.title}</h2>
        <p className="text-[24px]">{`${formatDate(
          props.startDate
        )} ~ ${formatDate(props.endDate)}`}</p>
      </div>
      <Button
        type={"submit"}
        icon={{
          location: "left",
          iconName: "trash",
          size: 48,
          color: "#1C1B1F",
        }}
        buttonStyle="mr-[80px]"
      />
    </div>
  );
};

import Button from "../common/Button";

interface CalendarProps {
  currentYear?: number;
  currentMonth?: number;
}

const CalendarHeader = (props: {
  currentYear: number;
  currentMonth: number;
}) => {
  return (
    <section className="flex items-center justify-between">
      <Button
        type="button"
        icon={{
          iconName: "left",
          color: "#1C1B1F",
          size: 40,
          location: "left",
        }}
      />
      <div className="flex gap-x-8">
        <div className="flex items-center gap-x-1">
          <span className="text-[24px]">{props.currentYear}년</span>
          <Button
            type="button"
            icon={{
              iconName: "down",
              color: "#1C1B1F",
              size: 24,
              location: "left",
            }}
          />
        </div>
        <div className="flex items-center gap-x-1">
          <span className="text-[24px]">{props.currentMonth}월</span>
          <Button
            type="button"
            icon={{
              iconName: "down",
              color: "#1C1B1F",
              size: 24,
              location: "left",
            }}
          />
        </div>
      </div>
      <Button
        type="button"
        icon={{
          iconName: "right",
          color: "#1C1B1F",
          size: 40,
          location: "left",
        }}
      />
    </section>
  );
};

const CalendarBody = () => {
  const weekDay = ["일", "월", "화", "수", "목", "금", "토"];
  return <section></section>;
};

const Calendar = (props: CalendarProps) => {
  return (
    <section>
      <CalendarHeader currentYear={2025} currentMonth={5} />
    </section>
  );
};

export default Calendar;

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TravelInfo, ScheduleInfo } from "../components";

interface Travel {
  _id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

interface Schedule {
  _id: string;
  travelId: string;
  content: string;
  startDate: string; // string format for grouping
  startTime: string;
  endTime: string;
  price: number;
}

const Travel = () => {
  const { travelId } = useParams();
  const [travel, setTravel] = useState<Travel | null>(null);
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    if (!travelId) return;

    const fetchTravel = async () => {
      const res = await axios.get(`/api/travels/${travelId}`);
      setTravel(res.data.data);
    };

    const fetchSchedules = async () => {
      const res = await axios.get(`/api/schedules/travel/${travelId}`);
      setSchedules(res.data.data);
    };

    fetchTravel();
    fetchSchedules();
  }, [travelId]);

  const totalPrice = schedules.reduce((sum, s) => sum + s.price, 0);

  const groupedByDate = schedules.reduce((acc, cur) => {
    const date = cur.startDate.split("T")[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(cur);
    return acc;
  }, {} as Record<string, Schedule[]>);

  const handleDelete = async (scheduleId: string) => {
    await axios.delete(`/api/schedules/${scheduleId}`);
    setSchedules((prev) => prev.filter((s) => s._id !== scheduleId));
  };

  return (
    <div className="p-6">
      {travel && (
        <TravelInfo
          travelId={travel._id}
          name={travel.name}
          startDate={travel.startDate}
          endDate={travel.endDate}
          price={totalPrice}
        />
      )}

      <div className="mt-8 space-y-6">
        {Object.entries(groupedByDate).map(([date, list]) => (
          <div key={date} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-3">{date}</h2>
            <div className="space-y-3">
              {list.map((s) => (
                <ScheduleInfo
                  key={s._id}
                  _id={s._id}
                  content={s.content}
                  startDate={s.startDate}
                  startTime={s.startTime}
                  endTime={s.endTime}
                  price={s.price}
                  onDelete={() => handleDelete(s._id)}
                  onEdit={() => console.log("편집", s._id)} // 필요 시 편집 로직 연결
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travel;

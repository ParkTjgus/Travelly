import { useEffect, useState } from "react";
import { FeaturedCard } from "./FeaturedCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Travel {
  _id: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

export const TravelListPage = () => {
  const [travels, setTravels] = useState<Travel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTravels = async () => {
      const res = await axios.get(
        `/api/travels/user/${localStorage.getItem("userId")}`
      );
      setTravels(res.data.data);
    };
    fetchTravels();
  }, []);

  return (
    <div className="flex flex-col gap-y-[24px]">
      {travels.map((travel) => (
        <FeaturedCard
          key={travel._id}
          id={travel._id}
          title={travel.name}
          startDate={travel.startDate}
          endDate={travel.endDate}
          onActionClick={() => navigate(`/travel/${travel._id}`)}
          onDelete={() => {
            axios
              .delete(`/api/travels/${travel._id}`)
              .then(() =>
                setTravels((prev) => prev.filter((t) => t._id !== travel._id))
              );
          }}
        />
      ))}
    </div>
  );
};

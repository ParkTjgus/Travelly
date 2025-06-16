import { CreationCard } from "../components/main/CreationCard.tsx";
import { TravelListPage } from "../components/main/TravelList.tsx";

const Main = () => {
  return (
    <div className="flex flex-col gap-y-[66px]">
      <CreationCard />
      <div>
        <h1 className="text-[24px] mb-[32px]">나의 여행 목록</h1>
        <TravelListPage />
      </div>
    </div>
  );
};

export default Main;

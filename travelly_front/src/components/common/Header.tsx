import Button from "./Button";
import Logo from "../../assets/Travelly_logo.svg";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Login 페이지로 이동
  };

  // const handleInvitaions = async () => {
  //   try {
  //     const response = await axios.get(
  //       `/api/invitations/${localStorage.getItem("userId")}`
  //     );
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  return (
    <header
      className="px-[72px] h-[88px] border-b-1 border-[#D1D1D6] min-w-screen
      bg-white
    flex items-center justify-between"
    >
      <img src={Logo} className="h-12" />
      <div className=" flex items-center justify-center gap-x-8">
        <Button
          type="button"
          label=""
          icon={{
            iconName: "email",
            color: "#8E8E93",
            size: 40,
            location: "left",
          }}
        />
        <Button
          type="button"
          label="로그아웃"
          buttonStyle="px-8 py-4 border border-point"
          onActionClick={handleLogout}
        />
      </div>
    </header>
  );
};

const HeaderLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* 여기에 자식 페이지가 렌더링됨 */}
      </main>
    </>
  );
};

export default HeaderLayout;

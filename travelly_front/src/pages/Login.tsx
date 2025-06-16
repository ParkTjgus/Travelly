import { Button, InputField } from "../components";
import Logo from "../assets/Travelly_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/auth/signin", { id, password });

      if (res.data.success == false) {
        throw new Error(res.data.error.details);
      }
      // ✅ 로그인 성공 시 userId 저장
      localStorage.setItem("userId", res.data.data.id); // 또는 res.data.data.id
      localStorage.setItem("userObjectId", res.data.data._id);
      navigate("/main"); // 혹은 원하는 페이지로 이동
    } catch (err) {
      alert(err);
    }
  };

  return (
    <main
      className="min-h-screen min-w-screen bg-main
      flex justify-center items-center"
    >
      <section
        className="flex flex-col py-[106px] 
                  justify-center items-center
                  bg-white rounded-2xl w-[572px]"
      >
        <img src={Logo} className="h-16 mb-[99px]" />
        <form className="flex flex-col gap-y-4">
          <InputField
            type="text"
            placeholder="아이디를 입력하세요"
            onChange={(e) => setId(e.target.value)}
            inputStyle="p-6 w-[400px] text-[20px] "
          />
          <InputField
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => setPassword(e.target.value)}
            inputStyle="p-6 w-[400px] text-[20px] "
          />
          <Button
            type="submit"
            label="로그인"
            buttonStyle="bg-main p-6 w-[400px] text-point text-[20px] font-normal"
            onActionClick={handleLogin}
          />
        </form>
        <Link to="/register" className="mt-[90px] text-sm text-point">
          계정이 없으신가요?
        </Link>
      </section>
    </main>
  );
};

export default Login;

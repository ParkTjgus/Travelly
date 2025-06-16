import { Button, InputField } from "../components";
import Logo from "../assets/Travelly_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [duplicationFlag, setDuplicationFlag] = useState(true);

  const handleRegister = async () => {
    try {
      if (duplicationFlag == true) {
        throw new Error("아이디 중복 검사를 해주세요");
      }
      const res = await axios.post("/api/auth/signup", { id, password, name });

      if (res.data.success == false) {
        throw new Error(res.data.error.details);
      }
      alert("회원가입에 성공하였습니다");
      navigate("/login");
    } catch (err) {
      alert(err);
    }
  };

  const checkDuplicationId = async (id: string) => {
    try {
      const res = await axios.get(`/api/users/${id}`);

      if (res.data.success == true) {
        throw new Error();
      }

      alert("사용 가능한 아이디입니다.");
      setDuplicationFlag(false);
    } catch (err) {
      alert("이미 존재하는 아이디입니다.");
    }
  };

  return (
    <main
      className="min-h-screen min-w-screen bg-main
      flex flex-col justify-center items-center"
    >
      <section
        className="flex flex-col py-[106px] 
                  justify-center items-center
                  bg-white rounded-2xl w-[572px]"
      >
        <img src={Logo} className="h-16 mb-[99px]" />
        <form className="flex flex-col gap-y-4">
          <div className="flex gap-x-2">
            <InputField
              type="text"
              placeholder="아이디를 입력하세요"
              onChange={(e) => setId(e.target.value)}
              inputStyle="p-6 w-[278px] placeholder:text-[20px]"
            />
            <Button
              label="중복 확인"
              type="submit"
              onActionClick={() => checkDuplicationId(id)}
              buttonStyle="bg-main w-[114px] px-4 h-[75px] text-point text-[20px] font-normal"
            />
          </div>
          <InputField
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={(e) => setPassword(e.target.value)}
            inputStyle="p-6 w-[400px] placeholder:text-[20px]"
          />
          <InputField
            type="text"
            placeholder="사용할 닉네임을 입력하세요"
            onChange={(e) => setName(e.target.value)}
            inputStyle="p-6 w-[400px] placeholder:text-[20px]"
          />
          <Button
            type="submit"
            label="회원가입"
            onActionClick={handleRegister}
            buttonStyle="bg-main p-6 w-[400px] text-point text-[20px] font-normal"
          />
        </form>
        <Link to="/" className="mt-[90px] text-sm text-point">
          계정이 있으신가요?
        </Link>
      </section>
    </main>
  );
};

export default Register;

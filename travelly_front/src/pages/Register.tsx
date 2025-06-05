import { Button, InputField } from "../components";
import Logo from "../assets/Travelly_logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
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
              inputStyle="p-6 w-[278px] placeholder:text-[20px]"
            />
            <Button
              label="중복 확인"
              type="submit"
              buttonStyle="bg-main w-[114px] px-4 h-[75px] text-point text-[20px] font-normal"
            />
          </div>
          <InputField
            type="password"
            placeholder="비밀번호를 입력하세요"
            inputStyle="p-6 w-[400px] placeholder:text-[20px]"
          />
          <InputField
            type="text"
            placeholder="사용할 닉네임을 입력하세요"
            inputStyle="p-6 w-[400px] placeholder:text-[20px]"
          />
          <Button
            type="submit"
            label="회원가입"
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

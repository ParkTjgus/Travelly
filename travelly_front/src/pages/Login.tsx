import { Button, InputField } from "../components";
import Logo from "../assets/Travelly_logo.svg";

const Login = () => {
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
            inputStyle="p-6 w-[400px] text-[20px] "
          />
          <InputField
            type="password"
            placeholder="비밀번호를 입력하세요"
            inputStyle="p-6 w-[400px] text-[20px] "
          />
          <Button
            type="submit"
            label="로그인"
            buttonStyle="bg-main p-6 w-[400px] text-point text-[20px] font-normal"
          />
        </form>
        <a className="mt-[90px]">계정이 없으신가요?</a>
      </section>
    </main>
  );
};

export default Login;

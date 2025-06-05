import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register } from "./pages";
import HeaderLayout from "./components/common/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* ✅ 헤더 없는 로그인 / 회원가입 */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ✅ 헤더가 포함된 나머지 모든 페이지 */}
          <Route element={<HeaderLayout />}>
            {/* 필요 시 추가 라우트 여기에 */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

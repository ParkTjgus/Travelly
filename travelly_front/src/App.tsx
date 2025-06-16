import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Main, NewTravel, Register, Travel } from "./pages";
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
            <Route path="/newTravel" element={<NewTravel />} />
            <Route path="/main" element={<Main />} />
            <Route path="/travel/:travelId" element={<Travel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

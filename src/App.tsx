import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AdminMore } from "./common/UI/adminMore/organelles/AdminMore";
import { AdminMenu } from "./common/UI/adminMenu/organelles/AdminMenu";
import { NewsPage } from "./pages/News/organelles/NewsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminMore />}>
        <Route path="/" element={<AdminMenu />}>
          <Route index element={<NewsPage/>} />
          <Route path="address" element={<></>} />
          <Route path="*" element={<></>} />
        </Route>{" "}
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AdminMore } from "./common/UI/adminMore/organelles/AdminMore";
import { AdminMenu } from "./common/UI/adminMenu/organelles/AdminMenu";
import { NewsPage } from "./pages/News/organelles/NewsPage";
import { SearchAddressPage } from "./pages/SearchAddressPage/organelles/SearchAddressPage";

function App() {
  return (
    //строим правильную роутеризацию с запасом на будущее - мало ли пригодится
    <Routes>
      <Route element={<AdminMore />}>
        <Route path="/" element={<AdminMenu />}>
          <Route index element={<NewsPage />} />
          <Route path="address" element={<SearchAddressPage />} />
          {/* Обрабатываем все страницы которые не перечислили */}
          <Route path="*" element={<>Тут пока пусто</>} /> 
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

import { TextToNewHtml } from "../molecules/TextToNews";
import "../styles/NewsPage.css";

//страница новости (она же главная)
export const NewsPage = () => {
  return (
    <div className="NewsPage">
      <div className="NewsPage-Header">
        <div className="NewsPage-Header-News">Новости</div>
        <div className="NewsPage-Header-NewsName">Обновление CRM до 1.2</div>
      </div>
      <div className="NewsPage-NewsText">
        {/* Подставляем вертску новости  */}
        <div style={{ paddingRight: "30px" }}>
          <TextToNewHtml />
        </div>
      </div>
    </div>
  );
};

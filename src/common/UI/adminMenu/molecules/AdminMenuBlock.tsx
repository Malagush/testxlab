import "../styles/AdminMenuBlock.css";
import homeLogo from "../../../../assets/images/icons/home.svg";
import searchLogo from "../../../../assets/images/icons/search_black.svg";
import tablesLogo from "../../../../assets/images/icons/vs_tables.svg";
import calendaryLogo from "../../../../assets/images/icons/calendary.svg";
import mapLogo from "../../../../assets/images/icons/map.svg";
import wigetsLogo from "../../../../assets/images/icons/wigets.svg";
import settingLogo from "../../../../assets/images/icons/setting.svg";
import settingPersonLogo from "../../../../assets/images/icons/ic_person_black.svg";
import settingMoneyLogo from "../../../../assets/images/icons/money.svg";
import exitLogo from "../../../../assets/images/icons/exit.svg";
import menuLevel from "../../../../assets/images/icons/menulevel.svg";
import burger from "../../../../assets/images/icons/burger.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface IAdminMoreItem {
  logo: string;
  name: string;
  url: string;
  children?: IAdminMoreItem[];
}

export const AdminMenuBlock = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [visibleSetting, setVisibleSetting] = useState(false);
  const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);

  const menuItems: IAdminMoreItem[] = [
    { logo: homeLogo, name: "Главная", url: "/" },
    { logo: searchLogo, name: "Поиск адресов", url: "/address" },
    { logo: tablesLogo, name: "Таблицы", url: "" },
    { logo: calendaryLogo, name: "Календарь", url: "" },
    { logo: mapLogo, name: "Карты", url: "" },
    { logo: wigetsLogo, name: "Виджеты", url: "" },
    {
      logo: settingLogo,
      name: "Настройки",
      url: "",
      children: [
        { logo: settingPersonLogo, name: "Настройки профиля", url: "" },
        { logo: settingMoneyLogo, name: "Управление финансами", url: "" },
      ],
    },
    { logo: exitLogo, name: "Выход", url: "" },
  ];

  return (
    <>
      <img
        className="AdminMenuBlock-burger"
        src={burger}
        onClick={() => setVisibleMobileMenu(!visibleMobileMenu)}
      ></img>
      <div
        className={
          "AdminMenuBlock " +
          (visibleMobileMenu ? "AdminMenuBlock-visible" : "")
        }
      >
        <div className="AdminMenuBlock-header">Меню</div>
        <div className="AdminMenuBlock-items">
          {menuItems.map((item: IAdminMoreItem, i: number) => (
            <div className="AdminMenuBlock-itemfull">
              <div
                className="AdminMenuBlock-item "
                onClick={() => {
                  item.children
                    ? setVisibleSetting(!visibleSetting)
                    : item.url &&
                      (navigate(item.url), setVisibleMobileMenu(false));
                }}
              >
                <div className="AdminMenuBlock-item-textAndImg">
                  <img src={item.logo}></img>
                  <div key={i} className="AdminMenuBlock-item-text">
                    {item.name}
                  </div>
                </div>
                {item.children && (
                  <img
                    style={
                      !visibleSetting ? { transform: "rotate(180deg)" } : {}
                    }
                    src={menuLevel}
                  ></img>
                )}
                {location.pathname === item.url && (
                  <div className="AdminMenuBlock-item-active"></div>
                )}
              </div>
              {item.children &&
                visibleSetting &&
                item.children.map((itemChild: IAdminMoreItem, i: number) => (
                  <div className="AdminMenuBlock-item AdminMenuBlock-items-children">
                    <div className="AdminMenuBlock-item-textAndImg">
                      <img src={itemChild.logo}></img>
                      <div key={i} className="AdminMenuBlock-item-text">
                        {itemChild.name}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

import "../styles/SearchAddressPage.scss";
import search from "../../../assets/images/icons/Vector_search.svg";
import { useEffect, useState } from "react";
import { SearchAddressApi } from "../molecules/SearchAddressApi";

//страница с поиском адресов и подключенной dadata
export const SearchAddressPage = () => {
  const [searchText, setSearchText] = useState(""); //текст с поля ввода
  const [dataAddress, setDataAddress] = useState([]); //полученные от апи данные

  useEffect(() => {
    console.log("dataAddress", dataAddress); //проверка в консоли что пришло
  }, [dataAddress]);

  return (
    <div className="SearchAddressPage">
      <div className="SearchAddressPage-Header">
        <div className="SearchAddressPage-Header-Address">Поиск адресов</div>
        <div className="SearchAddressPage-Header-AddressName">
          Введите интересующий вас адрес
        </div>
      </div>
      <div className="SearchAddressPage-InputButton">
        <input
          className="SearchAddressPage-Input"
          type="search"
          placeholder="Введите интересующий вас адрес"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="SearchAddressPage-Button "
          onClick={() =>
            searchText.length >= 3 &&
            SearchAddressApi(searchText, setDataAddress)
          }
        >
          <img src={search}></img>
          <div className="SearchAddressPage-item-text">Поиск</div>
        </button>
      </div>
      <div className="SearchAddressPage-table">
        <div className="SearchAddressPage-table-header">Адреса</div>
        {/* Мапим данные от апи, если они есть */}
        {dataAddress &&
          dataAddress.map((address: { unrestricted_value: string }) => (
            <div className="SearchAddressPage-table-text">
              {address.unrestricted_value}
            </div>
          ))}
      </div>
    </div>
  );
};

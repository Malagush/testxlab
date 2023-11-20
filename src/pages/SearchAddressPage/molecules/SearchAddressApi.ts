import axios from "axios";

//обрабатываем запрос апи
export function SearchAddressApi(
  query: string,
  setDataAddress: React.Dispatch<React.SetStateAction<never[]>>
) {
  const url =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "8c6919f81bf735e0b1911a20b5132fb3a3f8e8b1";
  let empty_pack: never[] = [];

  axios
    .post(
      url,
      {
        query: query,
        count: 20,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
        },
      }
    )
    .then((res) => {
      empty_pack = res.data.suggestions;
      setDataAddress(empty_pack);
    });
}

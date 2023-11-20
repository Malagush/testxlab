import { createEvent, createStore } from "effector";

export const $menuChoice = createStore< null>(null); //Выбранный элемент меню(элемент)
export const setMenuChoice = createEvent< null>();
$menuChoice?.on(setMenuChoice, (_, val) => val);
import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AdminMoreHeaderMobileItem } from "../atoms/AdminMoreHeaderMobileItem";
import {
  $RoutingTree,
  $actualPage,
} from "@src/common/functions/routing/stores";
import { findTopParent } from "@src/common/functions/routing/functions";

import Logo from "../../../assets/file-for-html/images/logo_cepr_yellow.svg";

import "../styles/AdminMoreHeaderMobile.css";

export interface IAdminMoreHeaderMobile {
  show: boolean; //Состояние отображение меню
  onClick: () => void;
}

//В этом компоненте есть изменение внешней логики роутов
export const AdminMoreHeaderMobile = (params: IAdminMoreHeaderMobile) => {
  const navigate = useNavigate();
  const actualPage = useStore($actualPage); //Актуальная страница
  const RoutingTree = useStore($RoutingTree); //Лист дерево всех страниц
  const [show, setShow] = useState<any | null>(null); //Выбранный элемент меню
  useEffect(() => {
    if (actualPage && params.show) {
      setShow(
        findTopParent({
          targetSignatura: actualPage?.signatura,
          tree: RoutingTree,
        })
      );
    }
  }, [actualPage, params.show]);
  return (
    <div
      className={
        params.show
          ? "AdminMoreHeaderMobile AdminMoreHeaderMobile__Show"
          : "AdminMoreHeaderMobile AdminMoreHeaderMobile__NotShow"
      }
    >
      <div className="container-fluid">
        <div className="row sidebar__header">
          <div className="col-2">
            <div
              onClick={params.onClick}
              className="header__menuToggle toggled"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="col-10 p-0">
            <a
              className="d-flex justify-content-center align-items-center"
              href="/"
            >
              <div className="header__logo">
                <img src={Logo} />
              </div>
              <div className="header__logo_text">Группа компаний</div>
            </a>
          </div>
        </div>
        <div className="row h-100">
          <div className="col-12">
            <ul className="left-menu mt-2">
              {RoutingTree &&
                RoutingTree.map((e: any) => (
                  <AdminMoreHeaderMobileItem
                    key={e.signatura}
                    RoutingTree={RoutingTree}
                    onClick={params.onClick}
                    value={e}
                    show={show}
                    setShow={setShow}
                    navigate={navigate}
                    isChildren={false}
                    actualPage={actualPage}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

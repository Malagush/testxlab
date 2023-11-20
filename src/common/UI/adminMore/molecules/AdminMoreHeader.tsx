import "../styles/AdminMoreHeader.css";
import logo from "../../../../assets/images/icons/ic_logo.svg";
import Userlogo from "../../../../assets/images/icons/ic_person.svg";

//футтер (шапка сайта)
export const AdminMoreHeader = () => {
  return (
    <div className="AdminMoreHeader">
      <div className="AdminMoreHeader-blocks">
        <div className="AdminMoreHeader-blocks-left">
          <img src={logo} className="AdminMoreHeader-blocks-logo" />
          <div className="AdminMoreHeader-blocks-text">Wrench CRM</div>
        </div>
        <div className="AdminMoreHeader-blocks-right">
          <img src={Userlogo} className="AdminMoreHeader-blocks-logo" />
          <div className="AdminMoreHeader-blocks-text AdminMoreHeader-blocks-text-fio">Алексей Макаров</div>
        </div>
      </div>
    </div>
  );
};

import Sidebar from "../../components/sidebar/Sidebar";
import "./listPage.scss";
import Navbar from "../../components/navbar/Navbar";
import UserTable from "../../components/usertable/UserTable";
import ProductTable from "../../components/producttable/ProductTable";
// import Table from "../../components/table/Table";
// import { Link } from "react-router-dom";
const ListPage = ({ pageType }) => {
  if (pageType === "users") {
    return (
      <div className="listPage">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <UserTable />
        </div>
      </div>
    );
  } else {
    return (
      <div className="listPage">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <ProductTable />
        </div>
      </div>
    );
  }
};

export default ListPage;

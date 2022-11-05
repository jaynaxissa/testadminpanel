import Sidebar from "../../components/sidebar/Sidebar";
import "./listPage.scss";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
const ListPage = () => {
  return (
    <div className="listPage">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default ListPage;

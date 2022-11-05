import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
const List = ({ pageType }) => {
  // app.js and list.jsx also pagetype , ideally wanna have a different name for producttable and usertable
  if (pageType === "users") {
    return (
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <Datatable />
        </div>
      </div>
    );
  } else {
    return (
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />

          <div className="datatable">
            <div className="datatableTitle">
              Add New Product
              <Link to="/products/new" className="link">
                Add New
              </Link>
            </div>
            <Table />
          </div>
        </div>
      </div>
    );
  }
};

export default List;

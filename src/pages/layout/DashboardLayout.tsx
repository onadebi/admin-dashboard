import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Login from "../login/Login";
import New from "../new/New";
import SingleDetail from "../single/Single-detail";
import "./dashboardlayout.scss";
import List from "../list/List";

const DashboardLayout = () => {
  return (
    <div className="dashboardLayout">
      <Sidebar />
      <div className="layoutContainer">
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SingleDetail />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route path=":productId" element={<SingleDetail />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;

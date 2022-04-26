import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget, { WidgetOptions } from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type={WidgetOptions.USER}/>
          <Widget type={WidgetOptions.EARNING}/>
          <Widget type={WidgetOptions.BALANCE}/>
          <Widget type={WidgetOptions.ORDER}/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
      </div>
    </div>
  );
};

export default Home;

import "./home.scss";
import Widget, { WidgetOptions } from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/table/ListTable";
const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <Widget type={WidgetOptions.USER} />
          <Widget type={WidgetOptions.EARNING} />
          <Widget type={WidgetOptions.BALANCE} />
          <Widget type={WidgetOptions.ORDER} />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={3/1} title={'Last 6 months (Revenue)'}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
            <ListTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

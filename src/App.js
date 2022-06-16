// import IdleTimer from "./components/IdleTimer";
import ColorPicker from "./components/ColorPicker";
import CreditCard from "./components/CreditCard";
import DatePick from "./components/DatePick";
import VideoPlay from "./components/VideoPlay";
import LoadingIndicators from "./components/LoadingIndicators";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";

import './App.css'
const App = () =>  {
  return (
    <div className="app">
      <div className="chart">
           <LineChart />
           <BarChart />
           <DoughnutChart />
      </div>
    </div>
  );
}

export default App;

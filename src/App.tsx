import { BrowserRouter } from "react-router-dom";
import DashboardLayout from "./pages/layout/DashboardLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DashboardLayout/>
      </BrowserRouter>
    </div>
  );
}

export default App;

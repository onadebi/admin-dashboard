import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import DashboardLayout from "./pages/layout/DashboardLayout";
import { selectTheme } from "./store/rootReducer";
import { EnumThemeOptions } from "./store/slices/theme.slice";
import './style/dark.scss'

function App() {
  const store = useSelector(selectTheme);
  return (
    <div className={store.darkMode === EnumThemeOptions.DARK ? "app dark": 'app'}>
      <BrowserRouter>
        <DashboardLayout/>
      </BrowserRouter>
    </div>
  );
}

export default App;

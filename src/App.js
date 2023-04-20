import "./App.scss";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="app-container">
        <div className="header-container">
          <Header />
        </div>
        <div className="main-container">
          <div className="sidebar-container">sidebar</div>
          <div className="app-content">app content</div>
        </div>
        <Outlet />
        
      </div>
    </>
  );
};

export default App;

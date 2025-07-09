import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
    return (
        <div className="main-wrap">
            <Header/>
            <Outlet />
        </div>
    );
};

export default MainLayout;
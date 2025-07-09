import "./App.scss";
import Footer from "./MainPage/Footer";
import Review from "./MainPage/Review";
import "./App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from "./components/Home";
import ItemPage from "./components/ItemPage";

const App = () => {
  return (
    <div>
      <ItemPage />
    </div>
  );
};

export default App;
import "./App.scss";
import Footer from "./MainPage/Footer";
import Review from "./MainPage/Review";
import "./App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Review/>
      <Footer/>
    </div>
  );
};

export default App;
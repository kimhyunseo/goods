import "./App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from "./components/Home";
import CategoryApp from './components/Category';
import CartPage from "./components/CartPage";
import { useState } from "react";
import Login from "./components/Login";
import './App.scss';
import MypageMobile from "./pages/MypageMobile";
import MypageTD from "./pages/MypageTD";

const App = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 장바구니에 아이템 추가
  const handleAddCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((j) =>
          j.id === item.id ? { ...j, count: j.count + 1 } : j
        );
      } else {
        return [...prev, { ...item, count: 1 }];
      }
    });
  };

    const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      
    </div>
  );
};

export default App;

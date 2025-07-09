import "./App.scss";
import Footer from "./MainPage/Footer";
import Review from "./MainPage/Review";
import "./App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from "./components/Home";
import Category from './components/Category'; // 상대 경로 기준
import CartPage from "./components/CartPage";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home onAddCart={handleAddCart} />} />
          <Route path="/cartegory" />
          <Route
            path="/cart"
            element={<CartPage cart={cart}/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

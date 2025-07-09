import "./App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/cartegory"/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
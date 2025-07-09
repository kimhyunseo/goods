import { GoBookmark } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div id="header">
      <div>
        <button>
          <IoMenu />
        </button>
        <img 
        onClick={()=>{navigate('/')}}
          className="logo" 
          src="/images/logo1.png" 
          alt="리림 로고"/>
        <div className="search">
          <span className="icon"><IoSearchOutline /></span>
          <input type="text" placeholder="어떤 상품을 찾고 계신가요?" />
        </div>
        <button>
          <IoSearchOutline />
        </button>
        <ul className="icon-wrap">
          <li>
            <GoBookmark />
          </li>
          <li>
            <FiUser />
          </li>
          <li>
            <IoCartOutline onClick={()=>{navigate('/cart')}} />
          </li>
        </ul>
      </div>
      <nav className="menubar">
        <ul>
          <li>ALL</li>
          <li>best</li>
          <li>kering</li>
          <li>sticker</li>
          <li>living</li>
          <li>card</li>
          <li>memo</li>
          <li>note</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

import { GoBookmark } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

const Header = ({ onCategorySelect }) => {
  const navigate = useNavigate();
  const categoryList = ["all", "best", "keyring", "sticker", "living", "card", "Memo", "Note"];
  
 const handleCategoryClick = (cat) => {
    if (onCategorySelect) {
      onCategorySelect(cat); // 선택 상태 전달 (선택사항)
    }
    navigate(`/category/${cat}`); // 카테고리 페이지 이동
  };

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
        {categoryList.map((cat) => (
          <li key={cat} onClick={() => handleCategoryClick(cat)}>
            {cat.toUpperCase()}
          </li>
        ))}
      </ul>
      </nav>
    </div>
  );
};

export default Header;

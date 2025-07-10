import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsBasket } from "react-icons/bs";

const CartPage = ({ cart,onCategorySelect }) => {
  const [items, setItems] = useState(cart);
  const navigate = useNavigate();
  const handleGoToBest = () => {
    if (onCategorySelect) {
      onCategorySelect("best");  // selectedCategory 상태 변경
    }
    navigate("/category/best");   // best 카테고리 페이지로 이동
  };

  const allChecked = items.length > 0 && items.every((item) => item.checked);

  const selectedCount = items.filter((item) => item.checked).length;
  const toggleAll = () => {
    const updated = items.map((item) => ({ ...item, checked: !allChecked }));
    setItems(updated);
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const changeQuantity = (id, delta) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const deleteSelected = () => {
    setItems(items.filter((item) => !item.checked));
  };

  const total = items
    .filter((item) => item.checked)
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-wrap">
      <div className="cart-left">
        <div className="title">
          <h2>Cart</h2>
          <div className="cart-header">
            <label>
              <input
                type="checkbox"
                checked={allChecked}
                onChange={toggleAll}
              />
              전체선택
            </label>
            <button onClick={deleteSelected}>선택삭제</button>
          </div>
        </div>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <BsBasket className="basket-icon"/>
            <h3>장바구니가 비어있어요</h3>
            <p>새로운 상품으로 채워주세요</p>
            <button onClick={handleGoToBest}>인기 상품 보러가기</button>
          </div>
        ) : (
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleItem(item.id)}
                />
                <div className="item-thumbnail"></div>
                <div className="item-info">
                  <p className="brand">Shop</p>
                  <p className="name">{item.name}</p>
                  <p className="option">{item.brand}</p>
                  <div className="quantity">
                    <button onClick={() => changeQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="price">
                  {(item.price * item.quantity).toLocaleString()}원
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cart-summary">
        <h4>결제예정 금액</h4>
        <ul>
          <li>
            <span>상품금액</span>
            <span>{total.toLocaleString()}원</span>
          </li>
          <li>
            <div className="delivery">
              <p>3만원 이상 무료배송</p>
              <span className="delivery-fee">배송비</span>
            </div>
            <span>
              {selectedCount === 0 ? "0원" : total >= 30000 ? "0원" : "3,000원"}
            </span>
          </li>
        </ul>
        <div className="total">
          결제예정금액{" "}
          <h5>
            {(
              total + (selectedCount === 0 ? 0 : total >= 30000 ? 0 : 3000)
            ).toLocaleString()}
            원
          </h5>
        </div>
        <button className="order-btn">주문하기</button>
      </div>
    </div>
  );
};

export default CartPage;

import { useState, useMemo, useEffect } from "react";
import { MdOutlineBookmarkBorder } from "react-icons/md";

const ITEMS_PER_PAGE = 15;
// --------------------- ProductCard 컴포넌트 ---------------------
const ProductCard = ({ product }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
  };
  return (
    <div className="product-card group">
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          onError={handleImageError}
        />
        <MdOutlineBookmarkBorder className="product-card__bookmark-icon" />
      </div>
      {/* 상품 정보 영역 */}
      <div className="product-card__info">
        <p className="product-card__brand">by {product.brand}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">
          {product.price.toLocaleString("ko-KR")}원
        </p>
      </div>
    </div>
  );
};
// --------------------- Pagination 컴포넌트 ---------------------
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="pagination" aria-label="Pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`pagination__button ${
            currentPage === number ? "active" : "inactive"
          }`}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};
// --------------------- ProductList 컴포넌트 ---------------------
const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(1);
  }, [products]);
  // 전체 페이지 수 계산
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className="product-list">
      <div className="product-list__grid">
        {currentItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
// --------------------- CategoryApp 메인 컴포넌트 ---------------------
export default function CategoryApp({selectedCategory}) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("../asset/sub.json")
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  }, []);
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allProducts.map((p) => p.category))];
    return ["all", ...uniqueCategories];
  }, [allProducts]);
  const filteredProducts = useMemo(() => {
  if (selectedCategory === "all") {
    return allProducts;
  }
  if (selectedCategory === "best") {
    return allProducts.filter((p) => p.isBest);
  }
  if (!selectedCategory) return [];
  return allProducts.filter((p) => p.category === selectedCategory);
}, [selectedCategory, allProducts]);
  return (
    <div className="category-app">
      <div className="category-app__container">
        {/* 상품 목록을 표시하는 메인 영역 */}
        <main className="category-app__main">
          <h2>{selectedCategory.toUpperCase()}</h2>
          {filteredProducts.length > 0 && (
            <ProductList products={filteredProducts} />
          )}
        </main>
      </div>
    </div>
  );
}

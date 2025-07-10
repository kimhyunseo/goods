import { useEffect, useState } from "react";
import reviews from "../asset/main-3.json";
import { IoIosArrowForward } from "react-icons/io";
import { IoStar } from "react-icons/io5";

const Review = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  // const reviews = [
  //   {
  //     id: 1,
  //     rating: "★★★★★",
  //     title: "마음에 들어요",
  //     content: "포장도 꼼꼼하고 친구도 마음에 든다네요 :)",
  //     writer: "작가 or 브랜드",
  //     product: "상품명",
  //     price: "24,000원",
  //   },
  //   {
  //     id: 2,
  //     rating: "★★★★★",
  //     title: "좋아요!",
  //     content: "배송도 빠르고 퀄리티도 좋아요.",
  //     writer: "작가 A",
  //     product: "상품명 A",
  //     price: "19,000원",
  //   },
  //   {
  //     id: 3,
  //     rating: "★★★★★",
  //     title: "굿굿!",
  //     content: "기대 이상이에요.",
  //     writer: "작가 B",
  //     product: "상품명 B",
  //     price: "22,000원",
  //   },
  //   {
  //     id: 4,
  //     rating: "★★★★★",
  //     title: "선물용으로 딱",
  //     content: "친구가 아주 좋아했어요!",
  //     writer: "작가 C",
  //     product: "상품명 C",
  //     price: "25,000원",
  //   },
  //   // 더 많은 리뷰 추가 가능
  // ];

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCount(1);
      } else if (width < 1440) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => {
      window.removeEventListener("resize", updateCount);
    };
  }, []);

  return (
    <div id="review-wrap">
      <div className="review-title">
        <h2>리뷰</h2>
        <p>
          더보기
          <IoIosArrowForward />
        </p>
      </div>

      <div className="review-all-list">
        {reviews.slice(0, visibleCount).map((review) => (
          <div className="review-list" key={review.setID}>
            <div className="review-main">
              <img src={review.setimage} alt={review.setTitle} />
              <div className="review-wrap">
                <span><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
              <p className="reviewtxt">{review.setTitle}</p>
              <p className="reviewsub">{review.setSubtitle}</p>
              </div>
            </div>

            <div className="price">
              {review.products.map((product, idx) => (
                <a href="#" key={idx}>
                  <img src={product.image} alt={product.mainTitle} />
                  <div className="item">
                    <p className="small-text">by {product.brand}</p>
                    <p>{product.mainTitle}</p>
                    <p className="price-text">{product.price.toLocaleString()}원</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;

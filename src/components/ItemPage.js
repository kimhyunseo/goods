import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ItemPage = ({onAddCart}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  const stickyRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const stickyEl = stickyRef.current;
      const footerEl = footerRef.current;

      if (!stickyEl || !footerEl) return;

      const isPC = window.innerWidth >= 1440;

      if (!isPC) {
        stickyEl.style.position = "static";
        stickyEl.style.transform = "none";
        stickyEl.style.opacity = "1";
        return;
      }

      const footerRect = footerEl.getBoundingClientRect();
      const offset = 20;

      if (footerRect.top < window.innerHeight - offset) {
        stickyEl.style.position = "absolute";
        stickyEl.style.top = "auto";
        stickyEl.style.bottom = "2rem";
        stickyEl.style.transform = "translateY(50px)";
        stickyEl.style.opacity = "0.6";
      } else {
        stickyEl.style.position = "fixed";
        stickyEl.style.top = "13rem";
        stickyEl.style.bottom = "auto";
        stickyEl.style.transform = "translateY(0)";
        stickyEl.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleMinus = () => {
    if (count > 1) setCount(count - 1);
  };
  const handlePlus = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch("/asset/sub.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id.toString() === id);
        setProduct(found);
      });
  }, [id]);

  if (!product) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <div id="items">
        <div className="right">
          <div className="banner">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="tablet-layout" ref={stickyRef}>
            <div className="review-text">
              <p className="color-blk">{product.brand}</p>
              <p className="color-gray">
                <span className="color-primary">★★★★★</span> (4.9)
              </p>
            </div>

            <div className="item-text">
                <p>{product.subtitle}</p>
              <h2>{product.name}</h2>
              <p>{product.price.toLocaleString()}원</p>
            </div>

            <div className="price-info">
              <div className="row">
                <span className="label">적립금</span>
                <span className="value highlight-red">최대 320원</span>
              </div>
              <div className="row">
                <span className="label">무이자 할부</span>
                <span className="value">카드사 할부 혜택안내</span>
              </div>
              <div className="row">
                <span className="label">배송정보</span>
                <span className="value">주문 제작 14일 이내 출고</span>
              </div>
              <div className="row">
                <span className="label">배송비</span>
                <span className="value">
                  <span className="highlight-blue">3,000원</span>
                  <br />
                  30,000원 이상 구매시 무료배송
                  <br />
                  제주/도서산간 3,500원 추가
                </span>
              </div>
            </div>

            <div className="sticky-wrap">
              <div className="price-box">
                <div className="count">
                  <div className="counter">
                    <button onClick={handleMinus}>-</button>
                    <span>{count}</span>
                    <button onClick={handlePlus}>+</button>
                  </div>
                </div>
                <div>
                  총금액 <span>{(product.price * count).toLocaleString()}원</span>
                </div>
              </div>
              <div className="btn-cart">
                <button onClick={onAddCart}>장바구니 담기</button>
                <button >구매하기</button>
              </div>
            </div>
          </div>
        </div>

        <div className="left">
          <ul className="content-list">
            <li>상품설명</li>
            <li>제작기간</li>
            <li>배송정보</li>
            <li>Q&A</li>
          </ul>

          <div className="detail">
            <img src={product.detail}/>
          </div>

          {/* 자주묻는 질문 항목 */}
          <ul className="qna-list" ref={footerRef}>
            <h1>Q&A</h1>
            <div>
              <ul className="Qmenu-list">
                배송
                <ul>
                  <li>
                    {" "}
                    ● 배송완료 까지의 소요시간:
                    <br />
                    배송완료 까지는 제작 완료 후 배송시작 부터 택배사 영업일
                    기준 평균 2~3일이 소요 됩니다{" "}
                  </li>
                  <li>
                    {" "}
                    ● 배송지 수정 방법 : 주문하신 주문건의 상태가 결제완료,
                    상품준비중일경우 [마이페이지] - [주문내역] - 수정하고 싶은
                    주문란 [더보기] 버튼 클릭 - [정보수정] 버튼 클릭하셔서 직접
                    배송지 수정이 가능합니다.
                    <span>
                      배송시작/배송중 단계에서 배송지 수정이 불가능 하여
                      문의채널을 통하여 미수령 반품문의로 문의 주시면 빠른 처리
                      도와드리겠습니다.
                    </span>
                  </li>
                </ul>
                <button>▼</button>
              </ul>
            </div>
            <div>
              <ul className="Qmenu-list" >
                교환/반품/주문취소
                <ul>
                  <li>
                    {" "}
                    ● 주문취소 안내 : 결제완료, 상품 준비중 단계에서는 주문
                    취소가능 합니다. 환불은 영업일 기준 1~2일 정도 소요 됩니다.
                  </li>
                  <li>
                    {" "}
                    ● 교환,반품 안내: 단순변심, 상품교환은 수령 후 7일 이내
                    반품, 교환이 가능합니다. (단, 상품 사용, 구매자의 부주의로
                    인해 파손이 된 경우 교환 반품이 불가능 합니다.) 환불
                    소요기간은 상품 검수 후 영업일 기준 2~3일이 소요 됩니다.
                  </li>
                  <li>
                    {" "}
                    ● 상품 불량/파손 :상품 수령 시 불량 또는 파손인 경우 문의
                    채널로 [ 주문번호 / 해당 상품 정보 / 해당 상품 사진 ]를
                    보내주시기 바랍니다. 보내주신 내용은 검토 후, 재배송or환불
                    처리 해드리겠습니다.
                  </li>
                </ul>
                <button>▼</button>
              </ul>
            </div>
            <div>
              <ul className="Qmenu-list">
                단체 주문
                <ul>
                  <li>
                    {" "}
                    ● 단체 주문 안내
                    <span>
                      동일 굿즈, 동일 디자인으로 주문 하실 때 10개이상부터 단체
                      주문으로 처리 됩니다.
                      <br />
                      단체 주문 할인은 [단체 주문 할인 쿠폰] 적용을 하셔야
                      합니다. 자세한 내용은 문의채널을 통하여 문의주시기
                      바랍니다.
                    </span>
                  </li>
                </ul>
                <button>▼</button>
              </ul>
            </div>
            <div>
              <ul className="Qmenu-list">
                기타 문의
                <ul>
                  <li>
                    <span> ● 실제 제품의 색감차이</span>
                    <br />
                    재질에 따라 동일한 이미지라도 색감 차이가 있습니다.
                    모니터에서 보이는 컬러(RGB)와 출력되어진 컬러(CMYK)는 차이가
                    있을 수 있는 점 양해 부탁드립니다. 관련 유의사항은 반드시
                    확인하시길 바랍니다.{" "}
                  </li>
                  <li>
                    <span>계좌번호 등록이 안되는 경우</span>
                    1. 일반계좌 or 사업자계좌인지 확인해주세요.
                    <br />
                    2. 계좌번호와 은행명 및 예금주 이름이 일치하는지 다시 한 번
                    확인해주세요.
                    <br />
                    3. 계좌번호에 '-' 기호를 넣으셨다면, 제거 후 번호로만 재등록
                    부탁드립니다.
                    <br />
                    4. 새로고침 혹은 쿠키삭제 후 재시도 부탁드립니다.
                    <br />
                    5. 예금주 성명이 10자 이상인 경우 10자까지만 입력 후 재시도
                    바랍니다.
                    <br />
                    6. 닉네임으로 예금주를 등록하신 경우, "본명"으로 입력하여
                    재시도 바랍니다.
                    <span>
                      은행 및 예금주와 계좌번호 정보가 성공적으로
                      인증되면, '인증완료' 버튼이 파란색으로 활성화됩니다.
                    </span>
                    <span>
                      위의 내용으로 시도 후에도 등록이 안되시는 경우, 문의채널을
                      통해 문의해주시기 바랍니다.
                    </span>
                  </li>
                  <li>
                    <span> ● 쿠폰 사용법</span>
                    주문시, '주문결제' 단계에서 할인 적용 원하시는 제품 오른쪽의
                    [쿠폰선택] 버튼을 선택하여 보유하고 계신 쿠폰 적용이
                    가능합니다.
                  </li>
                </ul>
                <button>▼</button>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
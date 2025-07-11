import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import "../asset/sub.json";

const ItemPage = () => {
    const [count, setCount] = useState(1);
    const handleMinus = () => {
        if (count > 1) setCount(count - 1);
    };
    const handlePlus = () => {
        setCount(count + 1);
    };
    useEffect(()=>{},[]);
    return (
        <div>
            <div id="items">
                {/* header */}
                <header>
                    <p><IoMenu /></p>
                    <img src="./images/logo1.png" />
                    <p><FaSearch /></p>
                </header>

                {/* banner  */}
                <div className="right"> {/* 태블릿,pc 오른쪽 고정*/}
                    <div className="tablet-layout">
                        <div className="banner">
                            <button className="btn-left">〈</button>
                            <button className="btn-right">〉</button>
                            <img />
                        </div>

                        {/* 상점 / 별점  */}
                        <div className="review-text">
                            <p className="color-blk">Shop</p>
                            <p className="color-gray"><p className="color-primary">★★★★★</p>(4.9)</p>
                        </div>

                        {/* 상품 이름  */}
                        <div className="item-text">
                            <h2>{}</h2>
                            <p>{}</p>
                        </div>

                        {/* 배송/할인 정보  */}
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
                                    <span className="highlight-blue">3,500원</span><br />
                                    50,000원 이상 구매시 무료배송<br />
                                    제주/도서산간 3,500원 추가
                                </span>
                            </div>
                        </div>

                        {/* 수량/가격  */}
                        <div className="count">
                            <div className="counter">
                                <button onClick={handleMinus}>-</button>
                                <span>{count}</span>
                                <button onClick={handlePlus}>+</button>
                            </div>
                            <p>{ }원</p>
                        </div>


                        {/* 총금액 결제  */}
                        <div className="price-box">
                            <p>총금액<span>{ }원</span></p>
                        </div>

                        {/* 장바구니/구매하기 버튼  */}
                        <div className="btn-cart">
                            <button>장바구니 담기</button>
                            <button>구매하기</button>
                        </div>
                    </div>
                </div>{/* 태블릿,pc 오른쪽 고정*/}

                <div className="left">
                    {/* 회사 정보 */}
                    <div className="office-img">
                        <img />
                    </div>

                    {/* 상세 페이지 내용 카테고리 */}
                    <ul className="content-list">
                        <li>상품설명</li>
                        <li>제작기간</li>
                        <li>베송정보</li>
                        <li>Q&A</li>
                    </ul>

                    {/* 상품설명 1번  */}
                    <div className="img-item">
                        <img />
                        <h3>상세 대표 설명1</h3>
                        <p>상세 페이지 상품설명 텍스트 입력 입니다<br />
                            데이터를 가져와 주세요</p>
                    </div>

                    {/* 상품설명 2번  */}
                    <div className="img-item2">
                        <div>
                            <img />
                            <img />
                        </div>
                        <h3>상세 대표 설명2</h3>
                        <p>상세 페이지 상품설명 텍스트 입력 입니다<br />
                            데이터를 가져와 주세요</p>
                    </div>

                    {/* 상품설명 3번  */}
                    <div className="img-item">
                        <img />
                        <h3>상세 대표 설명3</h3>
                        <p>상세 페이지 상품설명 텍스트 입력 입니다<br />
                            데이터를 가져와 주세요</p>
                    </div>

                    {/* 상품사이즈별 이미지/텍스트 */}
                    <div className="itemsize">
                        <img />
                        <h3>{ }사이즈</h3>
                    </div>
                    <div className="itemsize">
                        <img />
                        <h3>{ }사이즈</h3>
                    </div>
                    <div className="itemsize">
                        <img />
                        <h3>{ }사이즈</h3>
                    </div>

                    {/* 상품 사이즈/원재료/컬러  */}
                    <div className="item-size-text">
                        <h3>M 사이즈 기준</h3>
                        <p>높이 : <span>{ }</span>cm</p>
                        <p>너비 : <span>{ }</span>cm</p>
                        <p>원재료 : <span>{ }</span></p>
                        <p>컬러 : <span>{ }</span></p>
                    </div>

                    {/* 제작기간/ 배송일정/ 교환불가/제품하자 교환 안내 */}
                    <div className="post-date">
                        <img />
                        <img />
                        <img />
                        <img />
                    </div>

                    {/* 다른 상품 리스트  */}
                    <div className="contect-items">
                        <ul>
                            <li>
                                <img />
                                <p className="name">상품명</p>
                                <p className="sub-name">부 제목</p>
                            </li>
                            <li>
                                <img />
                                <p className="name">상품명</p>
                                <p className="sub-name">부 제목</p>
                            </li>
                            <li>
                                <img />
                                <p className="name">상품명</p>
                                <p className="sub-name">부 제목</p>
                            </li>
                            <li>
                                <img />
                                <p className="name">상품명</p>
                                <p className="sub-name">부 제목</p>
                            </li>
                        </ul>
                    </div>

                    {/* 자주묻는 질문 항목 */}
                    <ul className="qna-list">
                        <h1>Q&A</h1>
                        <div>
                            <ul className="Qmenu-list">배송
                                <ul>
                                    <li> ● 배송완료 까지의  소요시간:<br />
                                        배송완료 까지는 제작 완료 후 배송시작 부터 택배사 영업일 기준 평균 2~3일이 소요 됩니다 </li>
                                    <li> ● 배송지 수정 방법 : 주문하신 주문건의 상태가 결제완료, 상품준비중일경우
                                        [마이페이지] - [주문내역] - 수정하고 싶은 주문란 [더보기] 버튼 클릭 - [정보수정] 버튼 클릭하셔서
                                        직접 배송지 수정이 가능합니다.
                                        <span>배송시작/배송중 단계에서 배송지 수정이 불가능 하여 문의채널을 통하여 미수령 반품문의로 문의 주시면
                                            빠른 처리 도와드리겠습니다.</span></li>
                                </ul>
                                <button>▼</button>
                            </ul>
                        </div>
                        <div>
                            <ul className="Qmenu-list">교환/반품/주문취소
                                <ul>
                                    <li> ● 주문취소 안내 :  결제완료, 상품 준비중 단계에서는 주문 취소가능 합니다.
                                        환불은 영업일 기준 1~2일 정도 소요 됩니다.</li>
                                    <li> ● 교환,반품 안내: 단순변심, 상품교환은 수령 후 7일 이내 반품, 교환이 가능합니다.
                                        (단, 상품 사용, 구매자의 부주의로 인해 파손이 된 경우 교환 반품이 불가능 합니다.)
                                        환불 소요기간은 상품 검수 후 영업일 기준 2~3일이 소요 됩니다.</li>
                                    <li> ● 상품 불량/파손 :상품 수령 시 불량 또는 파손인 경우
                                        문의 채널로 [ 주문번호 / 해당 상품 정보 / 해당 상품 사진 ]를 보내주시기 바랍니다.
                                        보내주신 내용은 검토 후, 재배송or환불 처리 해드리겠습니다.</li>
                                </ul>
                                <button>▼</button>
                            </ul>
                        </div>
                        <div>
                            <ul className="Qmenu-list">단체 주문
                                <ul>
                                    <li> ● 단체 주문 안내
                                        <span>동일 굿즈, 동일 디자인으로 주문 하실 때 10개이상부터 단체 주문으로 처리 됩니다.<br />
                                            단체 주문 할인은 [단체 주문 할인 쿠폰] 적용을 하셔야 합니다.
                                            자세한 내용은 문의채널을 통하여 문의주시기 바랍니다.</span></li>
                                </ul>
                                <button>▼</button>
                            </ul>
                        </div>
                        <div>
                            <ul className="Qmenu-list">기타 문의
                                <ul>
                                    <li><span> ● 실제 제품의 색감차이</span><br />
                                        재질에 따라 동일한 이미지라도 색감 차이가 있습니다.
                                        모니터에서 보이는 컬러(RGB)와 출력되어진 컬러(CMYK)는 차이가 있을 수 있는 점 양해 부탁드립니다.
                                        관련 유의사항은 반드시 확인하시길 바랍니다. </li>
                                    <li>
                                        <span>계좌번호 등록이 안되는 경우</span>

                                        1. 일반계좌 or 사업자계좌인지 확인해주세요.<br />
                                        2. 계좌번호와 은행명 및 예금주 이름이 일치하는지 다시 한 번 확인해주세요.<br />
                                        3. 계좌번호에 '-' 기호를 넣으셨다면, 제거 후 번호로만 재등록 부탁드립니다.<br />
                                        4. 새로고침 혹은 쿠키삭제 후 재시도 부탁드립니다.<br />
                                        5. 예금주 성명이 10자 이상인 경우 10자까지만 입력 후 재시도 바랍니다.<br />
                                        6. 닉네임으로 예금주를 등록하신 경우, "본명"으로 입력하여 재시도 바랍니다.
                                        <span>
                                            은행 및 예금주와 계좌번호 정보가 성공적으로 인증되면, '인증완료' 버튼이 파란색으로 활성화됩니다.</span>
                                        <span>위의 내용으로 시도 후에도 등록이 안되시는 경우, 문의채널을 통해 문의해주시기 바랍니다.</span>
                                    </li>
                                    <li><span> ● 쿠폰 사용법</span>
                                        주문시, '주문결제' 단계에서 할인 적용 원하시는 제품 오른쪽의
                                        [쿠폰선택] 버튼을 선택하여 보유하고 계신 쿠폰 적용이 가능합니다.</li>
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
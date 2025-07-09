const Foot = () => {
  return (
    <footer>
      <ul className="footer-one">
        <li>무료 전세계 배송</li>
        <li>30일 이내 반품 정책</li>
        <li>문구류 중독자 수천 명과 함께 하세요</li>
      </ul>
      <div className="footer-two">
        <button>정보</button>
        <ul>
          <li>블로그</li>
          <li>우리에 대하여</li>
          <li>지속가능성</li>
          <li>배송 및 반품</li>
          <li>자주 묻는 질문</li>
          <li>문의하기</li>
        </ul>
      </div>
      <div className="footer-three">
        <button>가게</button>
        <ul>
          <li>새로운 추가 사항</li>
          <li>베스트셀러</li>
          <li>더보기</li>
        </ul>
      </div>
      <div className="footer-four">
        <p>특별 업데이트 및 할인 혜택을 받으려면 가입하세요</p>
        <div className="email-input">        
          <input placeholder="이메일 주소를 입력하세요" />
          <button>제출하기</button>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
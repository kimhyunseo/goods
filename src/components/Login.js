import { FaApple } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";

const Login = () => {
    return (
        <div className="login-wrap">
            <div className="login-box">
                <img src="./images/logo1.png" alt="로고 이미지" />
                <h1>LOGIN</h1>
                <h2>로그인해주세요</h2>
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
                <button className="login-btn">로그인</button>
                <div className="find-wrap">
                    <p>아이디 찾기</p>
                    <p>비밀번호 찾기</p>
                </div>
                <button className="join-btn">회원가입</button>
                <div className="icon-wrap">
                    <div className="icon apple"><FaApple /></div>
                    <div className="icon naver"><SiNaver /></div>
                    <div className="icon kakao"><RiKakaoTalkFill /></div>
                </div>
            </div>
        </div>
    );
};

export default Login;

import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    // 1.상테변수
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const onLogin = useAuthStore((s)=>s.onLogin)
    const { onLogin } = useAuthStore();
    const { onGoogleLogin } = useAuthStore();

    // 로그인하면 첫화면으로 이동하기
    const navigate = useNavigate();

    // 2.메서드
    // 기본 로그인
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("이메일 로그인", email)
        onLogin(email, password);
        // 로그인되면 첫화면으로 이동하기
        navigate("/");
    }
    // 구글 로그인
    const handleGoogleLogin = () => {
        console.log("구글 로그인");
        onGoogleLogin();

    }
    // 카카오 로그인
    const handleKakaoLogin = () => {
        console.log("카카오 로그인")
    }

    // 3.화면에 붙일 내용
    return (
        <div className="sub-page-wrap">
            <div className="inner">
                <div className="login-wrap">
                    <div className="ssection-title-box">
                        <h2 className="section-title">로그인</h2>
                        <p className="section-sub-title">로그인하시면 쿠폰이 발급됩니다</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="이메일을 입력하세요"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="6자리 이상"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">로그인</button>
                        <button onClick={handleGoogleLogin}>구글 로그인</button>
                        <button className="kakaoButton"
                            onClick={handleKakaoLogin}>카카오 로그인</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

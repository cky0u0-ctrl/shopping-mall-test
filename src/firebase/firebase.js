
// firebase앱을 초기화하는 함수
import { initializeApp } from "firebase/app";
// getAuth 인증 시스템 생성
// GoogleAuthProvider 구글 로그인 기능 제공
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// 데이터베이스 -> json형태로 저장
import { getFirestore } from "firebase/firestore";
// 파일저장소 이미지,영상,파일업로드
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    // cra app일 때 process.env.
    apiKey: "AIzaSyAyU450OdsgDzZOpMUtYisLyb2WxZsdZ4k",
    authDomain: "ezen-login-a293c.firebaseapp.com",
    projectId: "ezen-login-a293c",
    storageBucket: "ezen-login-a293c.firebasestorage.app",
    messagingSenderId: "148867880108",
    appId: "1:148867880108:web:5659d75c9e52236b4c3b09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// 데이터베이스 연결
// 상품저장, 주문데이터 저장
export const db = getFirestore(app);

// 파일 업로드용, 상품이미지 등록...
export const storage = getStorage(app);
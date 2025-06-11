import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    //뷰포트 동적계산을 위한변수
    --vh: 100%;
}

*{box-sizing:border-box}
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul {margin:0;padding:0}
body, button, input, select, table, textarea {font-size:14px; line-height:1.5; letter-spacing: normal; color:#202020;font-family: "Pretendard-SemiBold", -apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", helvetica, sans-serif}
//textarea기본설정 
h1, h2, h3, h4, h5, h6 {font-size:inherit;line-height:inherit}
textarea {-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;border:0;word-break:keep-all;word-wrap:break-word}
button, input {-webkit-border-radius:0;border-radius:0;border:0}
button {background-color:transparent}
fieldset, img {border:0}
img {vertical-align:top}
ol, ul {list-style:none}
address, em {font-style:normal}
a {display:flex;text-decoration:none;}
iframe {overflow:hidden;margin:0;border:0;padding:0;vertical-align:top}
mark {background-color:transparent}
i {font-style:normal}

#root {
    display: flex;
    flex-direction: column;
    /* overflow: hidden; framer motion작동이안돼서*/
    min-height: calc(var(--vh, 1vh) * 100);
}

// Pretendard 폰트 설정
@font-face {
    font-family: "Pretendard-Thin";  /* 폰트 패밀리 이름을 개별적으로 지정 */
    src: url("/fonts/Pretendard-Thin.otf") format("opentype");
    font-style: normal;
}

// 초기 html 설정
html {
    display: flex;
    justify-content: center;
    align-items: center;

    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 

    //모바일화면에서 1rem에 해당하는 폰트 크기를 일괄적으로 줄이고싶다면넣기 
    /* @media (max-width: 360px) {
        font-size:12px;
    } */
}

body {
    width: 100%;
}

`;

export default GlobalStyle;

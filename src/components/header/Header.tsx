import * as S from "./header.styled";
import logout from "@assets/icons/logout.svg";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <div>logo</div>
      <S.LoginInfoContainer>
        <p>로그인정보</p>
        <p>박세라</p>
        <p>(casy4112)</p>
        <p style={{ margin: "0 20px", lineHeight: "40px" }}>|</p>
        <img src={logout} alt="로그아웃 버튼" />
      </S.LoginInfoContainer>
    </S.HeaderWrapper>
  );
};
export default Header;

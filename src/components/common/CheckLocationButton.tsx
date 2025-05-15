import { ButtonWrapper } from "./common.styled";
import send from "@assets/icons/Send.svg";

const CheckLocationButton = () => {
  return (
    <ButtonWrapper color="#52525B" bordercolor="#D4D4D8" bgcolor="#fffff">
      위치확인
      <img src={send} alt="위치확인" />
    </ButtonWrapper>
  );
};

export default CheckLocationButton;

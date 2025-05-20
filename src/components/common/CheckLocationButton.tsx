import { ButtonWrapper } from "./common.styled";

const CheckLocationButton = ({ text, img }: { text: string; img: string }) => {
  return (
    <ButtonWrapper color="#52525B" bordercolor="#D4D4D8" bgcolor="#fffff">
      {text}
      <img src={img} alt="위치확인" />
    </ButtonWrapper>
  );
};

export default CheckLocationButton;

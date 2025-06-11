import { ButtonWrapper } from "./common.styled";

const CheckLocationButton = ({
  text,
  img,
  onClick,
}: {
  text: string;
  img: string;
  onClick?: () => void;
}) => {
  return (
    <ButtonWrapper
      color="#52525B"
      bordercolor="#D4D4D8"
      bgcolor="#fffff"
      onClick={onClick}
    >
      {text}
      <img src={img} alt="위치확인" />
    </ButtonWrapper>
  );
};

export default CheckLocationButton;

import { ButtonWrapper } from "./common.styled";

const YellowCheckButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <ButtonWrapper
      color="#E58900"
      bgcolor="#FFEED5"
      bordercolor="#FFD18C"
      onClick={onClick}
    >
      확인처리
    </ButtonWrapper>
  );
};

export default YellowCheckButton;

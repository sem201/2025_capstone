import { ButtonWrapper } from "./common.styled";

const RedCheckButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <ButtonWrapper
      color="#FF594D"
      bordercolor="#FFCAC6"
      bgcolor="#FFE7E6"
      onClick={onClick}
    >
      확인처리
    </ButtonWrapper>
  );
};

export default RedCheckButton;

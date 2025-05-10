import { ReactNode } from "react";
import styled from "styled-components";

const CommonButton2 = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default CommonButton2;

const Wrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  width: auto;
  min-width: fit-content;
  max-width: max-content;

  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.B50};

  border-color: ${({ theme }) => theme.colors.B50};
  border-width: 1px;
  border-style: soild;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.B40};
  }
`;

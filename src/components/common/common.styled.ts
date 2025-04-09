import styled from "styled-components";

export const ButtonWrapper = styled.button<{
  color: string;
  bgColor: string;
  borderColor: string;
}>`
  padding: 0;
  width: 50px;
  height: 20px;

  border-radius: 6px;
  border-width: 0.81px;
  border-style: solid;
  border-color: ${(props) => props.borderColor};

  color: ${(props) => props.color};
  background-color: ${({ theme }) => theme.colors.WHITE};

  font-size: 8px;
  &:hover {
    background-color: ${(props) => props.bgColor};
  }
`;

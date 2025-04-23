import styled from "styled-components";

export const ButtonWrapper = styled.button<{
  color: string;
  bgcolor: string;
  bordercolor: string;
}>`
  padding: 0 4px;
  width: fit-content;
  height: 20px;

  border-radius: 6px;
  border-width: 0.81px;
  border-style: solid;
  border-color: ${(props) => props.bordercolor};

  color: ${(props) => props.color};
  background-color: ${({ theme }) => theme.colors.WHITE};

  font-size: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2px;
  &:hover {
    background-color: ${(props) => props.bgcolor};
  }
`;

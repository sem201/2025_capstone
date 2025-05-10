import styled from "styled-components";

export const ButtonWrapper = styled.button<{
  color: string;
  bgcolor: string;
  bordercolor: string;
}>`
  padding: 8px 0px;
  width: 65px;
  height: 25px;

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
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.bgcolor};
  }
  font-family: ${({ theme }) => theme.fonts.body4["font-family"]};
  font-size: ${({ theme }) => theme.fonts.body5["font-size"]};
  font-weight: ${({ theme }) => theme.fonts.body5["font-weight"]};
  line-height: ${({ theme }) => theme.fonts.body5["line-height"]};
  letter-spacing: ${({ theme }) => theme.fonts.body5["letter-spacing"]};
`;

import styled from "styled-components";
import { theme } from "@styles/theme";

export const PopupHeader = styled.div<{
  bgcolor: keyof typeof theme.colors;
}>`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  background-color: ${({ theme, bgcolor }) => theme.colors[bgcolor]};
  padding: 0 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  border-radius: 7.2px 7.2px 0 0;
`;

export const PopupBody = styled.div`
  box-sizing: border-box;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 0 0 7.2px 7.2px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0.5em 0;
`;

export const PopupTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 0.5em;

  p {
    font-family: ${({ theme }) => theme.fonts.body4["font-family"]};
    font-size: ${({ theme }) => theme.fonts.body4["font-size"]};
    font-weight: ${({ theme }) => theme.fonts.body4["font-weight"]};
    line-height: ${({ theme }) => theme.fonts.body4["line-height"]};
    letter-spacing: ${({ theme }) => theme.fonts.body4["letter-spacing"]};
    margin: 0;
  }
`;
export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-family: ${({ theme }) => theme.fonts.body5["font-family"]};
    font-size: ${({ theme }) => theme.fonts.body5["font-size"]};
    font-weight: ${({ theme }) => theme.fonts.body5["font-weight"]};
    line-height: ${({ theme }) => theme.fonts.body5["line-height"]};
    letter-spacing: ${({ theme }) => theme.fonts.body5["letter-spacing"]};
    margin: 0.25em;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
`;

export const ConfirmPopupBody = styled.div`
  box-sizing: border-box;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.B15};
  border-radius: 6px;
  margin: 1em 0;

  input {
    width: 122px;
    height: 26px;

    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.B20};
    background-color: ${({ theme }) => theme.colors.WHITE};
    margin-bottom: 1.5em;
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.D30};
    }
  }
  p {
    color: ${({ theme }) => theme.colors.B60};
    font-family: ${({ theme }) => theme.fonts.body5["font-family"]};
    font-size: ${({ theme }) => theme.fonts.body5["font-size"]};
    font-weight: ${({ theme }) => theme.fonts.body5["font-weight"]};
    line-height: ${({ theme }) => theme.fonts.body5["line-height"]};
    letter-spacing: ${({ theme }) => theme.fonts.body5["letter-spacing"]};
  }
`;

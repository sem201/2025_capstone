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

  cursor: pointer;
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

export const DetailPopupBody = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: calc(100% - 30px);

  #log-table {
    grid-column: 1/2;
    padding: 17px;
    position: relative;

    border-right: 1px solid ${({ theme }) => theme.colors.B10};
  }
`;

export const UserContent = styled.div`
  grid-column: 2/3;
  border-left: 1px solid ${({ theme }) => theme.colors.B10};

  box-sizing: border-box;
  display: grid;
  grid-template-rows: 2.2fr 0.2fr 1fr;
  height: 100%;

  > div {
    display: flex;
    box-sizing: border-box;
    padding: 9px 16px;
  }

  #user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
  }
  #error {
    background-color: ${({ theme }) => theme.colors.D10};
    color: ${({ theme }) => theme.colors.Black};
    font-family: ${({ theme }) => theme.fonts.small["font-family"]};
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fonts.small["font-weight"]};
    line-height: ${({ theme }) => theme.fonts.small["line-height"]};
    letter-spacing: ${({ theme }) => theme.fonts.small["letter-spacing"]};
  }
  #input {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.B00};

    textarea {
      width: 100%;
      height: 100%;
      resize: none;

      font-family: ${({ theme }) => theme.fonts.small["font-family"]};
      font-size: 12px;
      font-weight: ${({ theme }) => theme.fonts.small["font-weight"]};
      line-height: ${({ theme }) => theme.fonts.small["line-height"]};
      letter-spacing: ${({ theme }) => theme.fonts.small["letter-spacing"]};
      border-radius: 4px;
      border-color: ${({ theme }) => theme.colors.B10};

      &:focus {
        outline: none;
      }
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  P {
    margin: 0;
    color: ${({ theme }) => theme.colors.B40};
    ${({ theme }) => theme.fonts.small};
  }
  button {
    width: fit-content;
    /* height: 50%; */
    background-color: ${({ theme }) => theme.colors.B50};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.WHITE};

    cursor: pointer;
  }
`;

export const errorContainer = styled.div<{ emergency: boolean }>`
  background-color: ${({ theme, emergency }) =>
    emergency ? theme.colors.D10 : theme.colors.N10};
  color: ${({ theme }) => theme.colors.Black};
  font-family: ${({ theme }) => theme.fonts.small["font-family"]};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fonts.small["font-weight"]};
  line-height: ${({ theme }) => theme.fonts.small["line-height"]};
  letter-spacing: ${({ theme }) => theme.fonts.small["letter-spacing"]};
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const PatientInfoContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    width: 100%;
    ${({ theme }) => theme.fonts.small};
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.B10};
  }
  span {
    color: ${({ theme }) => theme.colors.B40};
  }
`;

export const UserDiagnosisContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    width: 100%;
    ${({ theme }) => theme.fonts.small};
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4px;
  }
  span {
    color: ${({ theme }) => theme.colors.B40};
  }
  textarea {
    color: ${({ theme }) => theme.colors.B60};
    ${({ theme }) => theme.fonts.small};
    resize: none;
    border-radius: 4px;
    border-color: ${({ theme }) => theme.colors.B10};
    &:focus {
      outline: none;
    }
  }
`;

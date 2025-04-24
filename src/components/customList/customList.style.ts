import styled from "styled-components";

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.body3["font-family"]};
  font-size: ${({ theme }) => theme.fonts.body3["font-size"]};
  font-weight: ${({ theme }) => theme.fonts.body3["font-weight"]};
  line-height: ${({ theme }) => theme.fonts.body3["line-height"]};
  letter-spacing: ${({ theme }) => theme.fonts.body3["letter-spacing"]};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  align-items: center;
  justify-content: space-between;
  position: relative;
  input {
    width: 80%;
    height: 30px;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.B10};

    padding-left: 30px;
    margin-right: 10px;
  }
  > img {
    position: absolute;
    left: 10px;
  }
`;

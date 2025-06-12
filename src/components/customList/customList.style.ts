import styled from "styled-components";

export const Title = styled.p`
  ${({ theme }) => theme.fonts.body3}
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

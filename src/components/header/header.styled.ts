import styled from "styled-components";

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  height: 40px;

  background-color: ${({ theme }) => theme.colors.B60};
  ${({ theme }) => theme.fonts.body4}

  color: ${({ theme }) => theme.colors.B10};

  box-sizing: border-box;
`;

export const LoginInfoContainer = styled.div`
  display: flex;
  gap: 8px;
`;

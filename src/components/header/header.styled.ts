import styled from "styled-components";

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  height: 40px;

  background-color: ${({ theme }) => theme.colors.B60};
  font-family: ${({ theme }) => theme.fonts.body4["font-family"]};
  font-size: ${({ theme }) => theme.fonts.body4["font-size"]};
  font-weight: ${({ theme }) => theme.fonts.body4["font-weight"]};
  line-height: ${({ theme }) => theme.fonts.body4["line-height"]};
  letter-spacing: ${({ theme }) => theme.fonts.body4["letter-spacing"]};

  color: ${({ theme }) => theme.colors.B10};
`;

export const LoginInfoContainer = styled.div`
  display: flex;
  gap: 8px;
`;

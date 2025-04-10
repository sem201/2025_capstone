import styled from "styled-components";

export const FloorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const UserStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  align-items: center;
  justify-content: center;
`;

export const state = styled.div`
  color: ${({ theme }) => theme.colors.B60};

  font-family: ${({ theme }) => theme.fonts.body4["font-family"]};
  font-size: ${({ theme }) => theme.fonts.body4["font-size"]};
  font-weight: ${({ theme }) => theme.fonts.body4["font-weight"]};
`;

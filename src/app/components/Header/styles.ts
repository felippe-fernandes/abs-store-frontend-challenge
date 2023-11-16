import styled from "styled-components";

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 6rem;
  justify-content: space-between;
  padding: 0 5.5rem 0 4rem;
`;

export const LogoContainer = styled.div`
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 2rem;
`;

export const LogoTitle = styled.span`
  font-size: 40px;
  font-weight: 600;
  line-height: 19px;
  padding: 0.4rem;
`;

export const LogoSubtitle = styled.span`
  font-size: 20px;
  font-weight: 300;
  line-height: 19px;
  padding: 0;
`;

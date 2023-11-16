import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.footerBackground};
  width: 100vw;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  font-size: 12px;
`;

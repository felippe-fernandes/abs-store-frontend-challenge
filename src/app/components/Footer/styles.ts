import styled from "styled-components";

export const FooterContainer = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  font-size: 12px;
  font-weight: 400;
  height: 2rem;
  justify-content: center;
  width: 100vw;
`;

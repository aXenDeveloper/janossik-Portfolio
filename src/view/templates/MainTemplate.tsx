import styled from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import TopBar from "components/organism/TopBar/TopBar";
import { IComponentWithChildren } from "interface/interface";
import logo from "assets/logo_v2.svg";

const Wrapper = styled.main`
  padding: 40px 15px 10px 15px;
  &::after {
    content: " ";
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-image: url(${logo});
    background-size: 1000px;
    background-repeat: no-repeat;
    background-position: 40vw 20vh;
    z-index: -1;
    opacity: 0.25;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.tablet}) {
    &::after {
      background-position: 50vw 10vh;
    }
    max-width: 1024px;
    margin: 0 auto;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.desktop}) {
    &::after {
      background-position: 60vw 30vh;
    }
  }
  @media print {
    &::after {
      background-position: 60vw 20vh;
    }
  }
`;

const MainTemplate = ({ children }: IComponentWithChildren) => {
  return (
    <>
      <GlobalStyle />
      <TopBar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default MainTemplate;

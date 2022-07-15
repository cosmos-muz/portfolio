import { Footer } from "../molecules/Footer";
import { Header } from "../molecules/Header";
import { MainContent } from "../molecules/MainContent";
import styled from "styled-components";

const MainConainer=styled.div`
  height:100vh;
`

export function MainPage(props) {
    return <MainConainer>
      <Header/>
      <MainContent/>
      <Footer/>
    </MainConainer>;
  }
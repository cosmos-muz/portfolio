import styled from "styled-components";
import { PagesOverlay } from "../atoms/PagesOverlay";
import { PrimitiveContainer } from "../atoms/PrimitiveContainer";

const BackgroundImage = styled.div`
  background-image: url(https://kaitait.com//img/gc50.jpg);
  padding: 0px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: unset;
  min-height: 768px;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0 0 1.45rem;
  color: inherit;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  line-height: 1.3;
  text-transform: capitalize;
  font-family: Montserrat, sans-serif;
`;

const Heading1 = styled.h1`
  font-size: 64px;
  padding: 0;
  margin: 0 0 1.45rem;
  color: inherit;
  font-weight: 700;
  text-rendering: optimizeLegibility;
  line-height: 1.3;
  text-transform: capitalize;
  font-family: Montserrat, sans-serif;
  letter-spacing: 5px;
`;

const Heading2 = styled.h2`
  font-size: 38px;
  letter-spacing: 4px;
`;

const Heading3 = styled.h3`
  padding: 0;
  line-height: 1.3;
  font-family: Montserrat, sans-serif;
  letter-spacing: 1px;
  font-size: 20px;
`;

export function MainContent(props) {
  return (
    <BackgroundImage>
      <PagesOverlay>
        <PrimitiveContainer>
          <div style={{ width: "85%" }}>
            <Heading1>Kai Tait</Heading1>
            <Heading2>Professional Portfolio</Heading2>
            <Heading3>
              An enthusiastic software developer with more than 4 years’
              experience in the IT industry. For the most part focusing on
              Programming in Java, Python and React I have a passion for coding
              as well as a strong opinion on development practices, testing and
              clean code. Having created several projects; including web-apps,
              native iOS/Android apps and games I believe that the fundamental
              attributes to producing successful software are dedication,
              communication and pragmatism.
            </Heading3>
          </div>
        </PrimitiveContainer>
      </PagesOverlay>
    </BackgroundImage>
  );
}

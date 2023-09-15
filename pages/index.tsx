import styled from "styled-components";
import { CenteredContainer } from "../ui-library/layout-components";
import { Fade } from "../ui-library/page-components/Fade";
import { Typewriter } from "../ui-library/page-components/Typewriter";
import { TechIconList } from "../ui-library/page-components/TechIconList";

const Home = () => {
  const hello = "Hello, here is Can's space";

  return (
    <CenteredContainer>
      <HomeContainer>
        <TypewriterContainer>
          <Typewriter>{hello}</Typewriter>
        </TypewriterContainer>
        <Fade show={true}>
          <Detail>
            I am a <span className="gradient">software engineer</span> who likes
            to tackle product problems with technical solutions, a{" "}
            <span className="gradient">team player</span> who never gives up
            learning and loves to share his knowledge around
          </Detail>
        </Fade>
        <Fade show={true}>
          <h1>I love to work & have experience with</h1>
          <TechIconList />
        </Fade>
      </HomeContainer>
    </CenteredContainer>
  );
};

const TypewriterContainer = styled.div``;

const HomeContainer = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    gap: 80px;
    margin-top: 3em;
    justify-content: normal;
  }
`;

const Detail = styled.p`
  line-height: 1.5;
  font-size: 28px;
  max-width: 40em;
  margin: 0 auto;
  color: ${({ theme }) => `${theme.colors.hiContrastText}`};

  .gradient {
    background: linear-gradient(to right, #bf7af0, #f1a10d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export default Home;

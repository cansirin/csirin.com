import { CenteredContainer } from "../ui-library/layout-components";
import { Fade } from "../ui-library/page-components/Fade";
import { Typewriter } from "../ui-library/page-components/Typewriter";
import { InternalLink } from "../ui-library/page-components/InsiderLink";

const Home = () => {
  const hello = "Hello, here is Can's space.";

  return (
    <CenteredContainer width="55em">
      <div style={{ textAlign: "center" }}>
        <Typewriter>{hello}</Typewriter>
        <Fade show={true}>
          <p style={{ fontSize: "28px" }}>
            I am a software engineer who likes to tackle product problems with
            technical solutions and a team player who never gives up learning
            and loves to share his knowledge around.
          </p>
        </Fade>
      </div>
    </CenteredContainer>
  );
};

export default Home;

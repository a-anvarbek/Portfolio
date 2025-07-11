import styled from "styled-components";

import FrontEnd from "./FrontEnd";
import Projects from "./Projects";
import TeamProjects from "./TeamProjects";

import BG from "../images/favicon.png";

const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 40px 20px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Logo = styled.div`
  width: 344px;
  height: 344px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 13px solid #555;
  box-shadow: 5px 5px 15px #000;
  object-fit: cover;
  transition: transform 0.4s ease, border 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border: 13px solid #007ced;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  animation: fadeIn 1s ease-in;
  ${fadeIn}

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || "16px"};
  color: ${({ $color }) => $color || "#808080"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "400"};
  margin: ${({ $margin }) => $margin || "0"};
  line-height: 1.5;
`;

const Box = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  width: 177px;
  height: 55px;
  border: ${({ $border }) => $border || "3px solid #007CED"};
  color: ${({ $color }) => $color || "#fff"};
  background-color: transparent;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ $color }) =>
      $color === "#007CED" ? "#007CED" : "#fff"};
    color: ${({ $color }) => ($color === "#007CED" ? "#fff" : "#007CED")};
  }
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Logo>
            <Img src={BG} alt="Profile" />
          </Logo>

          <Content>
            <P $color="#fff" $fontSize="36px" $fontWeight="700">
              Briefly about me
            </P>

            <P $fontSize="18px" $margin="20px 0" $color="#ccc">
              Motivated and passionate Front-End Developer with a strong
              foundation in building scalable and user-friendly web
              applications. Committed to delivering high-quality code and
              continuously improving skills through real-world projects.
            </P>

            <Box>
              <Button>Projects</Button>
              <Button $border="3px solid #fff" $color="#007CED">
                Contact
              </Button>
            </Box>
          </Content>
        </Container>
      </Wrapper>

      <FrontEnd />
      
      <Projects />
      
      <TeamProjects />
    </>
  );
};

export default Home;

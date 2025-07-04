import styled from "styled-components";

import BG from "../images/favicon.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: green; */
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: calc(100% - 20%);
  height: 400px;
  margin: auto;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 344px;
  height: 344px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 334px;
  height: 334px;
  border-radius: 50%;
  border: 13px solid #555;
  box-shadow: 5px 5px 5px #111;
`;

const Content = styled.div`
  width: calc(100% - 410px);
  /* height: 400px; */
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || ""};
  color: ${({ $color }) => $color || "#808080"};
  font-weight: ${({ $fontWeight }) => $fontWeight || ""};
  margin: ${({ $margin }) => $margin || ""};
`;

const Box = styled.div``;

const Button = styled.button`
  width: 177px;
  height: 66px;
  border: ${({ $border }) => $border || "3px solid #007CED"};
  color: ${({ $color }) => $color || "#fff"};
  border-radius: 50px;
  margin-right: 25px;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <Img src={BG} alt="" />
        </Logo>

        <Content>
          <P
            color="#fff"
            $fontSize="40px"
            $fontWeight="700"
          >
            Briefly about me
          </P>

          <P $fontSize="18px" $margin="20px 0">
            Motivated and passionate Front-End Developer with a strong
            foundation in building scalable and user-friendly web applications.
            Committed to delivering high-quality code and continuously improving
            skills through real-world projects.
          </P>

          <Box>
            <Button>Projects</Button>

            <Button $border="3px solid #fff" $color="#007CED">Contact</Button>
          </Box>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Home;

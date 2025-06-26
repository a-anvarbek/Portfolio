import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import styled from "styled-components";

import Title from "../components/Title";

import Img1 from "../images/Img1.png";
import Img2 from "../images/Img2.png";
import Img3 from "../images/Img3.png";
import Img4 from "../images/Img4.png";
import Img5 from "../images/Img5.png";
import Img6 from "../images/Img6.png";
import Img7 from "../images/Img7.png";

const Wrapper = styled.div`
  padding: 30px 40px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  overflow: hidden;
`;

const Button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  background-color: #007ced;
  cursor: pointer;
`;

const ImgBox = styled.div`
  width: 79.6%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: 270px;
  border-radius: 30px;
  border: 2px solid #555;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 75%;
  border-radius: 30px 30px 0 0;
  border: none;
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 28px;
  font-weight: bold;
  background-color: transparent;
  text-align: center;
`;

const BoxBtn = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
`;

const Btn = styled.button`
  border: none;
  width: 30%;
  height: 35px;
  border-radius: 50px;
  border: ${({ $border }) => $border || "2px solid #007CED"};
`;

const A = styled.a`
  color: ${({ $color }) => $color || "#fff"};
  text-decoration: none;
`;

const images = [
  {
    img: Img1,
    name: "Weather App",
    url: "https://weather-app-a-anvarbek.netlify.app",
    link: "https://github.com/a-anvarbek/Weather-react",
  },

  {
    img: Img2,
    name: "Pet Finder",
    url: "https://pets-react-test.netlify.app",
    link: "https://github.com/a-anvarbek/Pets-react",
  },

  {
    img: Img3,
    name: "Blacknotes",
    url: "https://blacknotes-app.netlify.app",
    link: "https://github.com/a-anvarbek/Blacknotes-App",
  },

  {
    img: Img4,
    name: "Calculator",
    url: "https://a-anvarbek.github.io/Calculator",
    link: "https://github.com/a-anvarbek/Calculator",
  },

  {
    img: Img5,
    name: "Simon Game",
    url: "https://a-anvarbek.github.io/Simon-Game",
    link: "https://github.com/a-anvarbek/Simon-Game",
  },

  {
    img: Img6,
    name: "World of wisdom",
    url: "https://a-anvarbek.github.io/World_of_Wisdom",
    link: "https://github.com/a-anvarbek/World_of_Wisdom",
  },

  {
    img: Img7,
    name: "Dice Game",
    url: "https://a-anvarbek.github.io/Dice-Game",
    link: "https://github.com/a-anvarbek/Dice-Game",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 200;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <>
      <Title name="Projects" />

      <Wrapper>
        <Container>
          <Button onClick={() => scroll("left")}>
            <FaArrowLeftLong
              size={40}
              color="#fff"
              style={{ backgroundColor: "#007ced" }}
            />
          </Button>

          <ImgBox ref={scrollRef}>
            {images.map((image, index) => (
              <Card key={index}>
                <Img src={image.img} alt="" />

                <CardTitle>{image.name}</CardTitle>

                <BoxBtn>
                  <Btn>
                    <A href={image.url}>Live</A>
                  </Btn>
                  <Btn $border="2px solid #fff">
                    <A href={image.link} $color="#007CED">
                      GitHub
                    </A>
                  </Btn>
                </BoxBtn>
              </Card>
            ))}
          </ImgBox>

          <Button onClick={() => scroll("right")}>
            <FaArrowRightLong
              size={40}
              color="#fff"
              style={{ backgroundColor: "#007ced" }}
            />
          </Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default Projects;

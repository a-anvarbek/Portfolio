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

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background-color: #007ced;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const ImgBox = styled.div`
  width: 79.6%;
  height: 500px;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    height: auto;
    width: 50%;
    gap: 10px;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  width: 270px;
  border-radius: 30px;
  border: 2px solid #555;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 124, 237, 0.3);
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 350px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
  border-radius: 30px 30px 0 0;
  border: none;

  @media (max-width: 768px) {
    height: 70%;
  }
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 28px;
  font-weight: bold;
  background-color: transparent;
  text-align: center;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BoxBtn = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 15px 20px;
  gap: 10px;
`;

const Btn = styled.button`
  flex: 1;
  height: 35px;
  border-radius: 50px;
  background-color: transparent;
  border: ${({ $border }) => $border || "2px solid #007CED"};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #007ced;
    font-weight: bold;
    transition: color 0.3s ease;
    background-color: transparent;
  }

  &:hover {
    background-color: #007ced;
  }

  &:hover a {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 12px;
  }
`;

const A = styled.a`
  display: inline-block;
  color: ${({ $color }) => $color || "#fff"};
  text-decoration: none;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 35px;
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
    const scrollAmount = 300;

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
              size={30}
              color="#fff"
              style={{ backgroundColor: "#007ced" }}
            />
          </Button>

          <ImgBox ref={scrollRef}>
            {images.map((image, index) => (
              <Card key={index}>
                <Img src={image.img} alt={image.name} />

                <CardTitle>{image.name}</CardTitle>

                <BoxBtn>
                  <Btn>
                    <A
                      href={image.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </A>
                  </Btn>
                  <Btn $border="2px solid #fff">
                    <A
                      href={image.link}
                      target="_blank"
                      $color="#007CED"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </A>
                  </Btn>
                </BoxBtn>
              </Card>
            ))}
          </ImgBox>

          <Button onClick={() => scroll("right")}>
            <FaArrowRightLong
              size={30}
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

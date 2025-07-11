import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import styled from "styled-components";

import Title from "../components/Title";
import Img8 from "../images/Img8.png";
import Img9 from "../images/Img9.png";
import Img10 from "../images/Img10.png";
import Img11 from "../images/Img11.jpg";

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
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 124, 237, 0.3);
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 420px;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: none;
  margin: 20px 0;

  @media (max-width: 768px) {
    height: 120px;
    width: 120px;
    margin: 15px 0 10px 0;
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
    font-size: 22px;
  }
`;

const Description = styled.div`
  color: #fff;
  padding: 0 15px;
  text-align: left;
  font-size: 16px;
  height: 180px;
  overflow: hidden;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
    height: 160px;
    padding: 0 12px;
  }
`;

const BoxBtn = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 15px;
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
    img: Img8,
    name: "Edu-Connect",
    url: "https://edu-connect-org.netlify.app",
    link: "https://github.com/a-anvarbek/edu_connect",
    text: `This project was created for courses to solve communication between teachers and parents. 
    With this one platform, up to 15 courses can be managed.`,
  },
  {
    img: Img9,
    name: "Coffee Men",
    url: "https://coffeemen.netlify.app",
    link: "https://github.com/a-anvarbek/Coffee-Men",
    text: `Landing page for a coffee shop showing products, prices, and preparation methods. Responsive and stylish.`,
  },
  {
    img: Img10,
    name: "Barbershop",
    url: "https://alishersbarbershop.netlify.app",
    link: "https://github.com/a-anvarbek/Alisher-s-Barbershop",
    text: `A modern barbershop site that shows services, master info, and working hours.`,
  },
  {
    img: Img11,
    name: "Next Page",
    url: "https://next-page-company1.netlify.app",
    link: "https://github.com/a-anvarbek/Next-Page",
    text: `Business website showcasing company services, profiles, and contact form.`,
  },
];

const TeamProjects = () => {
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
      <Title name="Team Projects" />
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
                <Description>{image.text}</Description>
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

export default TeamProjects;

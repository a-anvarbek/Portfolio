import { FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import styled, { keyframes } from "styled-components";

import Title from "../components/Title";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  padding: 50px 40px;
  animation: ${fadeIn} 0.6s ease;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 5%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Column = styled.div`
  width: 47%;
  min-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const Section = styled.div`
  margin-bottom: 25px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 25px;
  transition: transform 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateX(5px);
  }
`;

const Icon = styled.div`
  font-size: 36px;
  color: #61dafb;
  flex-shrink: 0;
`;

const TitleText = styled.p`
  margin-bottom: 25px;
  font-size: 26px;
  font-weight: bold;
  color: #ffffff;
`;

const TitleContent = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
`;

const Description = styled.p`
  margin-top: 8px;
  font-size: 17px;
  color: #cccccc;
  line-height: 1.5;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  height: 10px;
  width: 100%;
  background-color: #2e2e2e;
  border-radius: 10px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.$percent}%;
  background: linear-gradient(90deg, #007ced, #00c6ff);
  border-radius: 10px;
  transition: width 0.6s ease;
`;

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML & CSS",
    description:
      "Strong layout and styling skills. Experience with Material UI, Bootstrap, and Tailwind CSS.",
  },
  {
    icon: <FaJs />,
    title: "JavaScript (Functional)",
    description:
      "Solid understanding of ES6+ syntax, DOM manipulation, and functional programming concepts.",
  },
  {
    icon: <FaReact />,
    title: "React.js + Vite",
    description:
      "Built scalable apps using React and Vite. Focused on modular components and clean project structure.",
  },
  {
    icon: <SiRedux />,
    title: "Redux Toolkit & Axios",
    description:
      "Efficient state management and API integration using Redux Toolkit and Axios.",
  },
  {
    icon: <FaGithub />,
    title: "Git & GitHub",
    description:
      "Experienced in team collaboration via GitHub. Familiar with branching and pull requests.",
  },
];

const codingSkills = [
  { name: "HTML", percent: 80 },
  { name: "CSS", percent: 80 },
  { name: "CSS-Library", percent: 70 },
  { name: "JavaScript", percent: 55 },
  { name: "React", percent: 50 },
  { name: "Redux Toolkit", percent: 45 },
  { name: "GitHub", percent: 40 },
];

const FrontEnd = () => {
  return (
    <>
      <Title name="FrontEnd skills" />

      <Wrapper>
        <Container>
          <Column>
            <Section>
              <TitleText>What am I doing?</TitleText>
              {skills.map((skill, index) => (
                <Row key={index}>
                  <Icon>{skill.icon}</Icon>
                  <div>
                    <TitleContent>{skill.title}</TitleContent>
                    <Description>{skill.description}</Description>
                  </div>
                </Row>
              ))}
            </Section>
          </Column>

          <Column>
            <Section>
              <TitleText>Coding Skills</TitleText>
              {codingSkills.map((skill, index) => (
                <div key={index} style={{ marginBottom: "22px" }}>
                  <ProgressLabel>
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                  </ProgressLabel>
                  <ProgressBar>
                    <Progress $percent={skill.percent} />
                  </ProgressBar>
                </div>
              ))}
            </Section>
          </Column>
        </Container>
      </Wrapper>
    </>
  );
};

export default FrontEnd;

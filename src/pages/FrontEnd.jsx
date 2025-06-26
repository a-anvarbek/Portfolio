import { FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

import styled from "styled-components";

import Title from "../components/Title";

const Wrapper = styled.div`
  padding: 30px 40px;
`;

const Container = styled.div`
  display: flex;
  gap: 6%;
  height: 350px;
  overflow-y: auto;
`;

const Column = styled.div`
  width: 47%;
  height: 100%;
  padding-right: 10px;
`;

const Section = styled.div`
  margin-bottom: 25px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  font-size: 34px;
  color: #61dafb;
`;

const TitleText = styled.p`
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

const TitleContent = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

const Description = styled.p`
  margin: 6px 0 0;
  font-size: 18px;
  color: #c0c0c0;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  margin-top: 25px;
`;

const ProgressBar = styled.div`
  height: 8px;
  width: 100%;
  background-color: #2e2e2e;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.$percent}%;
  background-color: #2196f3;
  border-radius: 5px;
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
                <div key={index} style={{ marginBottom: "16px" }}>
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

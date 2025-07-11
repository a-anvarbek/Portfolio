import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TitleDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: #333;
  display: flex;
  align-items: center;
  padding: 30px 40px;
  border-bottom: 2px solid #555;
  border-top: 2px solid #555;
  animation: ${fadeIn} 0.6s ease-in-out;

  @media (max-width: 768px) {
    padding: 20px;
    justify-content: center;
    text-align: center;
  }
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || "40px"};
  color: ${({ $color }) => $color || "#808080"};
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "600"};
  margin: ${({ $margin }) => $margin || "0"};
  line-height: 1.2;
  transition: all 0.3s ease;

  &:hover {
    color: #007ced;
    text-shadow: 0px 0px 8px #007ced88;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Title = ({ name }) => {
  return (
    <TitleDiv>
      <P
        $fontSize="55px"
        $backgroundColor="#333"
        $color="#fff"
        $fontWeight="700"
      >
        {name}
      </P>
    </TitleDiv>
  );
};

export default Title;

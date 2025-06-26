import styled from "styled-components";

const TitleDiv = styled.div`
  width: 100%;
  height: 130px;
  background-color: #333;
  display: flex;
  align-items: center;
  padding: 0 40px;
  border-bottom: 2px solid #555;
  border-top: 2px solid #555;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || ""};
  color: ${({ $color }) => $color || "#808080"};
  background-color: ${({ $backgroundColor }) => $backgroundColor || ""};
  font-weight: ${({ $fontWeight }) => $fontWeight || ""};
  margin: ${({ $margin }) => $margin || ""};
`;

const Title = (props) => {
  return (
    <TitleDiv>
      <P
        $fontSize="55px"
        $backgroundColor="#333"
        $color="#fff"
        $fontWeight="700"
      >
        {props.name}
      </P>
    </TitleDiv>
  );
};


export default Title;
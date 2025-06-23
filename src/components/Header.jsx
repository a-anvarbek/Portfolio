import styled from "styled-components";

import BG from "../images/favicon.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0 5px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

const P = styled.p`
  font-size: 30px;
  color: #fff;
`;

const A = styled.a`
  font-size: 18px;
  color: #808080;
  margin-left: 50px;
  text-decoration: none;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <Img src={BG} alt="" />
          <P>A-Anvarbek</P>
        </Logo>

        <Menu>
          <A href="">Anvarbek</A>
          <A href="">FrontEnd skills</A>
          <A href="">Projects</A>
          <A href="">Contact</A>
          <a href=""></a>
        </Menu>
      </Container>
    </Wrapper>
  );
};

export default Header;

import styled from "styled-components";
import BG from "../images/favicon.png";
import { useNavigate } from "react-router";
import { useState } from "react";

const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 10px 20px;
    height: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover p {
    color: #007ced;
  }
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  border-radius: 50%;
`;

const P = styled.p`
  font-size: 26px;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s ease;
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: #fff;
    margin: 4px 0;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${(props) => (props.open ? "flex" : "none")};
    margin-top: 10px;
    padding-bottom: 10px;
  }
`;

const NavItem = styled.div`
  font-size: 18px;
  color: #ccc;
  margin-left: 40px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #007ced;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #007ced;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Logo onClick={() => navigate("/")}>
          <Img src={BG} alt="logo" />
          <P>A-Anvarbek</P>
        </Logo>

        <Burger onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </Burger>

        <Menu open={menuOpen}>
          <NavItem onClick={() => navigate("/")}>Anvarbek</NavItem>
          <NavItem onClick={() => navigate("/skills")}>FrontEnd skills</NavItem>
          <NavItem onClick={() => navigate("/projects")}>Projects</NavItem>
          <NavItem onClick={() => navigate("/contact")}>Contact</NavItem>
        </Menu>
      </Container>
    </Wrapper>
  );
};

export default Header;

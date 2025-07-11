import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px 40px;
  border-top: 2px solid #555;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 15px 20px;
    height: auto;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  flex-wrap: wrap;
  cursor: pointer;
  gap: 15px;
`;

const Seal = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const A = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #808080;
  transition: color 0.3s ease, transform 0.3s ease;
  margin-right: ${({ $marginLeft }) => $marginLeft || "25px"};
  position: relative;

  &:hover {
    color: #fff;
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #007ced;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Contact>
          <A href="https://t.me/a_anvarbek">Telegram</A>
          <A href="https://t.me/anvarisblog">Chanel</A>
          <A href="https://www.instagram.com/_next_page_devs/">Instagram</A>
          <A href="tel:+998900500767">Phone</A>
        </Contact>

        <Seal>
          <A $marginLeft="0">&copy; 2025 a-anvarbek. Portfolio</A>
        </Seal>
      </Container>
    </Wrapper>
  );
};

export default Footer;

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  padding: 30px 40px;
  border-top: 2px solid #555;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  height: 30px;
  cursor: pointer;
`;

const Seal = styled.div`
  display: flex;
  padding: 0 5px;
  align-items: center;
  cursor: pointer;
  height: 30px;
`;

const A = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #808080;
  margin-right: ${({ $marginLeft }) => $marginLeft || "25px"};
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

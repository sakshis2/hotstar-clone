import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogone src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Discription>
          Genius level intellect Proficient scientist and engineer Powered armor
          suit: Superhuman strength, speed, durability, agility, reflexes, and
          senses Supersonic flight Energy repulsor and missile projection
          Regenerative life support
        </Discription>
        <CTALogTwo src="/images/cta-logo-two.png" />


      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    position: absolute;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity:0.7;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
align-items: center

`;

const CTALogone = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;

const Discription = styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;

`;


const CTALogTwo = styled.img`
width:90%;
`
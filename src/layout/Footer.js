import styled from 'styled-components'

const FooterContainer = styled.section`
  background: #eee;
`

const CopyrightText = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
  font-family: 'Courier Prime', monospace;
  font-size: 1.4rem;
  margin: 2rem auto;
  text-align: center;
  width: 50%;
`

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>
        Close the world. txen eht nepO.
        This site is powered by the <a href="https://genshin.dev/">genshin.dev</a> API. This site 
        is not affiliated with or endorsed by miHoYo.
        No Copyright Infringment intended. Genshin Impact is a trademark of miHoYo.
      </CopyrightText>
    </FooterContainer>
  )
}

export default Footer
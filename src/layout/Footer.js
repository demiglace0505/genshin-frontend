import styled from 'styled-components'

const FooterContainer = styled.section`
  background: #eee;
  padding: 4rem;
`

const CopyrightText = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
  font-family: 'Courier Prime', monospace;
  font-size: 1.4rem;
  margin: 0 auto;
  text-align: center;
  width: 50%;
`

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>
        Serialize Yourself.
      </CopyrightText>
      <CopyrightText>
        This site is powered by the <a href="https://genshin.dev/">genshin.dev</a> API.
      </CopyrightText>
      <CopyrightText>
        This site is created by CHRISTIAN CRUZ (demiglace0505) 
        and is in any means, not affiliated with nor endorsed by miHoYo.
      </CopyrightText>
      <CopyrightText>
        The characters and artworks presented in this site
        are not owned by the site creator, and are used only purely for creative purposes.
        No Copyright Infringment intended. <a href="https://genshin.mihoyo.com/en/home">Genshin Impact</a> is a trademark of miHoYo.
      </CopyrightText>
    </FooterContainer>
  )
}

export default Footer
import styled from 'styled-components'

import { backgroundDark } from '../theme/colors'
import logo from '../images/logo.png'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundDark};
`

const LogoContainer = styled.a`
  height: 100%;
`

const Logo = styled.img`
  height: 100%;
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer href="https://genshin.mihoyo.com/en">
        <Logo src={logo} />
      </LogoContainer>
      

    </HeaderContainer>
  )
}

export default Header
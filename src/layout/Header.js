import styled from 'styled-components'

const HeaderContainer = styled.div`
  background-color: red;
`

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Serialize yourself</h1>
    </HeaderContainer>
  )
}

export default Header
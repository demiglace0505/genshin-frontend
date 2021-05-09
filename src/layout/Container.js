import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-rows: [header-start] 10vh 
                      [header-end hero-start] min-content
                      [hero-end search-start] min-content
                      [search-end main-start] min-content
                      [main-end footer-start] min-content
                      [footer-end]

`

export default Container
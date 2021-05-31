import styled from 'styled-components'

const AppContainer = styled.div`
  /* display: grid; */
  /* grid-template-rows: [header-start] 10vh 
                      [header-end hero-start] min-content
                      [hero-end review-start] min-content
                      [review-end search-start] min-content
                      [search-end main-start] min-content
                      [main-end footer-start] min-content
                      [footer-end] 60rem */
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
`

export default AppContainer
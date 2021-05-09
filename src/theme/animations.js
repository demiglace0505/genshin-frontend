import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1.0);
  }
`

export const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`
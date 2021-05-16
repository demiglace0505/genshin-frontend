import React from 'react'
import styled from 'styled-components'

import { textBrown, backgroundPaper } from '../theme/colors.js'

const ReviewCard = styled.div`
  user-select: none;
  width: 80%;
  margin: 2rem;
  padding: 2rem;
  height: 100%;
  background-color: ${backgroundPaper};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const ReviewBody = styled.p`
  font-size: 2rem;
  text-align: center;
  letter-spacing: 1px;
  color: ${textBrown};
`

const ReviewAuthor = styled.p`
  font-size: 3rem;
  margin-top: 2rem;
  align-self: flex-end;
  letter-spacing: 2px;
  color: ${textBrown};
`

const Review = (props) => {
  return (
    <ReviewCard>
      <ReviewBody>
        {props.content}
      </ReviewBody>
      <ReviewAuthor>
        ~ {props.critic}
      </ReviewAuthor>
    </ReviewCard>
  )
}

export default Review
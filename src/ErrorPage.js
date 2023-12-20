import { styled } from 'styled-components'
import { Button } from './styles/Button'
import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div>
          <h2>404</h2>
          <h2>UH OH! You're lost</h2>
          <p>The page you're looking for does not exist. How you got here is a mystery.
            But you can click on button below to go back to homepage.
          </p>
          <NavLink to="/">
            <Button>HOME</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.container {
  padding: 9rem 0;
  text-align: center;

  h2 {
    font-size: 8rem;
  }

  h3 {
    font-size: 4.2rem;
  }

  p {
    margin: 2rem 0;
  }
}
`

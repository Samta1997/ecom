import React from 'react'
import { styled } from 'styled-components'

const Trusted = () => {
  return (
    <Wrapper>
        <div className='brand-section'>
        <h3>Trusted by 1000+ companies</h3>
            <div className='container'>
                
                <div className='brand-section-slider'>
                
                    
                    <div className='slide'>
                        <img src='https://seeklogo.net/wp-content/uploads/2015/11/hp-inc-logo-vector-download-400x400.jpg' alt='hplogo'/>
                    </div>
                    <div className='slide'>
                        <img src='https://seeklogo.net/wp-content/uploads/2015/11/hp-inc-logo-vector-download-400x400.jpg' alt='hplogo'/>
                    </div>
                    <div className='slide'>
                        <img src='https://seeklogo.net/wp-content/uploads/2015/11/hp-inc-logo-vector-download-400x400.jpg' alt='hplogo'/>
                    </div>
                    <div className='slide'>
                        <img src='https://seeklogo.net/wp-content/uploads/2015/11/hp-inc-logo-vector-download-400x400.jpg' alt='hplogo'/>
                    </div>
                    <div className='slide'>
                        <img src='https://seeklogo.net/wp-content/uploads/2015/11/hp-inc-logo-vector-download-400x400.jpg' alt='hplogo'/>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 4rem 0 0 0;
  }
  h3 {
    
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }

`
export default Trusted
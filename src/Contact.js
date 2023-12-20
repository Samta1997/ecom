import { styled } from "styled-components"

export const Contact = () => {
  return (
    <Wrapper>
      <h2>Contact Page</h2>
      <iframe title="mappp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.240985508024!2d77.16937657377319!3d31.103033468548688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390579dde88175df%3A0xb8d3ba7a75044e32!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1692953260624!5m2!1sen!2sin" 
      width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xwkdojpk" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="username" required autoComplete="off"/>
            <input type="email" placeholder="email" name="email" autoComplete="off" required/>
            <textarea name="textarea" placeholder="Enter your message" rows="10" cols="30" required autoComplete="off"></textarea>
            <input type="submit" value="send"/>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}

`

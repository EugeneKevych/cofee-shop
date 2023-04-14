import { css } from '@emotion/css';

const footerStyles=css`
  width: 100%;
  height: 150px;
  margin-top: 30px;


  a{
  color: #000;
  }

  a + a {
    margin-left: 10px;
  }

  img {
    margin-top: 30px;
  }
`;


export default function Footer() {

  return (
    <footer className={footerStyles}>
      <div >

        <a href="/"><img alt="logo_coffeeBeans" src="/logoBlack.png  " />Coffee house</a>

        <a href="/">Our coffee</a>
        <a href="/">For your pleasure</a>
      </div>
      <img alt='beans lines' src='/beansBlack.svg' />
    </footer>
  )
}

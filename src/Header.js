import { css } from '@emotion/css';

const headerStyles = css`
  width: 355px;
  height: 50px;
  font-size: 12px;
  text-decoration: none;
  position: absolute;
  left: 149px;
  top:30px;
  z-index: 1;


  a + a {

    margin-left: 10px;

  }


`;

export default function Header() {
  return (
    <header className={headerStyles}>

        <img alt="logo_coffeeBeans" src="/logo_beans.png  " />
        <a href="/">Coffee house</a>

        <a href="/">Our coffee</a>
        <a href="/">For your pleasure</a>

    </header>
  );
}

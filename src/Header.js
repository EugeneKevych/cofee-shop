import { css } from '@emotion/css';

const headerStyles = css`
  width: 355px;
  height: 40px;
  // display: block;
  // justify-content: space-between;
  border: 1px solid tomato;
`;
export default function Header() {
  return (
    <div className={headerStyles}>
      <a href="/">Coffee house</a>
      <a href="/">Our coffee</a>
      <a href="/">For your pleasure</a>
    </div>
  );
}

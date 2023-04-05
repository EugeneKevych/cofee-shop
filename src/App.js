import { injectGlobal } from '@emotion/css';
import Header from './Header';

injectGlobal`
*,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            margin: 0;

          }

          h1 {
            font-size: 48px;
            color: #015a8d;
            text-align: center;
          }

          h2 {
            font-size: 38px;
            color: #015a8d;
          }

          a {
            color: #015a8d;
            font-weight: 700;
            text-decoration: none;
          }
`;
function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
    </>
  );
}

export default App;

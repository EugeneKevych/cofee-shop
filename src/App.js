import { css, injectGlobal } from '@emotion/css';
import Header from './Header';

injectGlobal`
*,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            font-family: Merienda;
            font-size: 14px;
            font-weight: 400;
            margin: 0;
            text-align: center;
            color: #fff;
          }

          h1 {
            font-size: 42px;
            color: #fff;
            text-align: center;
            font-weight: 500;

          }

          h2 {
            font-size: 32px;
            color: #fff;

          }

          h3{
            font-size: 24px;
            font-weight: 500;

          }

          a {
            color: #fff;
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
          }
`;

const banner = css`
  width:100%;
  top: 0;
  left: 0;
  z-index: 0;
`;

const bannerStyles = css`
  width: 100%;
  position: absolute;
  top: 120px;
  left:0;
  z-index: 1;

`;

const buttonStyles = css`
  margin:0;
  width: 120px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 3px;
  font-family: Merienda;
  color: #fff;
  font-size: 16px;
`;

const aboutUsStyles = css`
  width: 100%;
  min-height: 520px;
  padding: 80px 425px 101px;
  color: #000;

    p {
      line-height: 20.22px;
      font-weight: 400px;
    }
`;

const textStyles = css`
  margin: auto;
  width: 589px;
  height: 223px;
`;

const ourBestStyles = css`
  width: 100%;
  text-align: center;
  background-image: url('/paper.png');
  min-height: 495px;
  padding: 80px 320px 110px;

    h3{
      color: #000;
    }

  `;




function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>

          <img  className={banner} alt='bannerCoffeeAndDevices' src='/banner1.png'></img>

          <div className={bannerStyles}>
            <h1>Everything You Love About Coffee</h1>
            <img alt='beans' src='/beansWhite.svg'/>
            <h3>We makes every day full of energy and taste</h3>
            <h3>Want to try our beans?</h3>
            <button className={buttonStyles}>More</button>
          </div>

          <div className={aboutUsStyles}>
            <h3>About Us</h3>
            <img alt='beans lines' src='/beansBlack.svg' />
              <div className={textStyles}>
                <p >Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                  Afraid at highly months do things on at. Situation recommend objection do intention
                  so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                  met spot shy want. Children me laughing we prospect answered followed. At it went
                  is song that held help face.
                </p>
                <p>
                  Now residence dashwoods she excellent you. Shade being under his bed her, Much
                  read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                  horrible but confined day end marriage. Eagerness furniture set preserved far
                  recommend. Did even but nor are most gave hope. Secure active living depend son
                  repair day ladies now.
                </p>
              </div>
          </div>

          <div className={ourBestStyles}>
            {/*<img  alt='paper background' src='/paper.png'/> */}
            <h3>Our Best</h3>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

import { css } from '@emotion/css';

export default function Product({products}){

  const productStyles = css`
    width: 220px;
    height: 240px;
    background-color: #fff;
    border-radius: 10px;

      img{
        width: 151px;
        height:130px;
        margin: 20px 35px 0;
      }

      p{
        font-size: 14px;
        color: #000;
        text-align: right;
        margin: 14px 20px 0;
      }
  `;
  return(
    <>
      {products.map((item) => {
        return(
        <div key={item.id} className={productStyles}>
          <img alt='coffee' src={item.img}/>
      <p>{item.name}</p>
      <p>{item.price}</p>
        </div>
      )})}
</>


  )
}

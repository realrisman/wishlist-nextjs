const Product = ({ products }) => (
  <div>
    <div className="row">
      {products.map((product, i) => (
        <div className="card" key={i}>
          <img src={product.image} />
          <p>{product.title}</p>
          <div className="price">{product.price}</div>
          <button className="btn">ADD TO CART</button>
        </div>
      ))}
    </div>

    <style jsx>{`
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: center;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card img {
        width: 100%;
      }
      .card p {
        margin: 20px 0 10px 0;
        font-size: 13px;
        color: #333;
      }
      .card .price {
        display: inline-block;

        width: auto;
        height: 38px;

        background-color: #979797;
        -webkit-border-radius: 3px 4px 4px 3px;
        -moz-border-radius: 3px 4px 4px 3px;
        border-radius: 3px 4px 4px 3px;

        border-left: 1px solid #979797;

        /* This makes room for the triangle */
        margin-left: 19px;

        position: relative;

        color: white;
        font-weight: 300;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 22px;
        line-height: 38px;

        padding: 0 10px 0 10px;
      }
      .card .price:before {
        content: '';
        position: absolute;
        display: block;
        left: -19px;
        width: 0;
        height: 0;
        border-top: 19px solid transparent;
        border-bottom: 19px solid transparent;
        border-right: 19px solid #979797;
      }
      .card .price:after {
        content: '';
        background-color: white;
        border-radius: 50%;
        width: 4px;
        height: 4px;
        display: block;
        position: absolute;
        left: -9px;
        top: 17px;
      }
      .card button {
        background: #28a528;
        border-radius: 4px;
        color: #fff;
        text-transform: uppercase;
        padding: 12px;
        width: 100%;
        margin-top: 0.9rem;
      }
    `}</style>
  </div>
)

export default Product

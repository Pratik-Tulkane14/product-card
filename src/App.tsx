import './App.css'
import perfume from "/perfume.png"
function App() {

  return (
    <>
    <div className="main">

      <div className="card">
        <div className="left-section">
          <img src={perfume} className='perfume-img' alt="perfume-bottle" />
        </div>
        <div className="right-section">
          <h1 className='category'>Perfume</h1>
          <h1 className='title'>Gabrielle Essence Eau De Parfum</h1>
          <p className='product-desc'>
            A floral, solar, and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price-wrapper">
            <div className="">
              <span className='sale-price'>$149.99</span>

            </div>
            <div className="">
              <del className='list-price'>$169.99</del>

            </div>

          </div>
          <button className='card-btn'>Add to Cart</button>
        </div>
      </div>
      </div>

    </>
  )
}

export default App

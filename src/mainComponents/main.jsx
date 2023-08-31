import '../mainComponentsCss/main.css'
import star from '../imgs/star.png'
import PropTypes from 'prop-types';
import stars from '../imgs/stars.png'


function Product(props){
    return(
        <div className='product'>
         <div className='product-description'>
            <h1>
                Body Cream
                <img id='stars' src={stars}/>
            </h1>
            <p>
                Caring about the body with creams that typically contain the highest porpotion pf all and natural fats and are great for dry skin, and areas like the elbows, knees and heels.
            </p>
         </div>
         <div className='product-details'>
          <p className='rating'>{props.rating}</p>
          <div className='stars'>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
          </div>
          <div className='pr-we'>
            <p className='price'>{props.price}</p>
            <p className='weight'>{props.weight}</p>
          </div>
          <div className='quantity'>
            <button>
             <span>-</span>
             <span>1</span>
             <span>+</span>
            </button>
          </div>
          <button id='to-cart'> Add to Cart</button>
          <div className='b-c'>
            <div>
             <button id='o-one'>01</button>
             <button id='beauty-collection'>BEAUTY COLLECTION</button>
            </div>
            <div>
                <p>Explore All Products
                <i className="fa-solid fa-arrow-right"></i>
                </p>
            </div>
          </div>
          <div className='closure'>
            <img src={star}/>
            <p>Conception of beauty aim to capture what is essential</p>
          </div>
         </div>
        </div>
    )
}
Product.propTypes = {
    rating: PropTypes.string.isRequired, // Allowing string type for 'rating'
    price: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
  };
////////////////////////
function Main(){
    return(
     <div className='main'>
        <Product
            rating="best rated"
            price="$150"
            weight="0.5kg"
        />
        <img
            src='https://vault.uicore.co/spa/wp-content/uploads/sites/18/2019/01/product-3.webp'
        />
     </div>
    )
}
///////////////////////

export default Main;
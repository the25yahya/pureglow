import '../mainComponentsCss/main.css'
import star from '../imgs/star.png'
import PropTypes from 'prop-types';



function Product(props){
    return(
        <div className='product'>
         <div className='product-description'>
            <h1>
                Body Cream
            </h1>
            <p>
                Caring about the body with creams that typically contain the highest porpotion pf all and natural fats and are great for dry skin, and areas like the elbows, knees and heels.
            </p>
         </div>
         <div>
          <p>{props.rating}</p>
          <div className='stars'>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
          </div>
          <div>
            <p>{props.price}</p>
            <p>{props.weight}</p>
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
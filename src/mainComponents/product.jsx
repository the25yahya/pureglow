import PropTypes from 'prop-types';


function Product(props){
    return(
        <div className="product2">
         <img
            src={props.src}
         />
         <p>{props.name}</p>
         <p>{props.tag}</p>
         <p>{props.price}</p>
         <button>QUICK BUY</button>
        </div>
    )
}
Product.propTypes = {
    src: PropTypes.string.isRequired, // Allowing string type for 'rating'
    tag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };

export default Product
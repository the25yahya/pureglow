import PropTypes from 'prop-types';

function Category(props){
    return(
        <div className="category">
          <img
            src={props.src}
          />
          <p>{props.title}</p>
        </div>
    )
}
Category.propTypes = {
    src:PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, // Allowing string type for 'rating'
  };
export default Category;
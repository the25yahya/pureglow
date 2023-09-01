import cream from "../imgs/cream.png"
import '../mainComponentsCss/nav.css'
import bag from '../imgs/bag.png'
import PropTypes from 'prop-types';

function Nav(props){
    return(
        <nav>
         <div className="title">
            <img
                src={cream}
            />
            <p>PureGlow</p>
         </div>
         <div className="navigation">
          <p onClick={props.handleHomeClick}>Home</p>
          <p onClick={props.handleAboutClick}>About</p>
          <p onClick={props.handleProductsClick}>Products</p>
         </div>
         <div className="user"> 
           <p>My bag</p>
           <img
            src={bag}
           />
         </div>
        </nav>
    )
}
Nav.propTypes = {
    handleHomeClick: PropTypes.func.isRequired,
    handleAboutClick : PropTypes.func.isRequired,
    handleProductsClick : PropTypes.func.isRequired,
  };

export default Nav;
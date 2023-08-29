import cream from "../imgs/cream.png"
import '../mainComponentsCss/nav.css'
import bag from '../imgs/bag.png'
function Nav(){
    return(
        <nav>
         <div className="title">
            <img
                src={cream}
            />
            <p>PureGlow</p>
         </div>
         <div className="navigation">
          <p>Home</p>
          <p>About</p>
          <p>Products</p>
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

export default Nav;
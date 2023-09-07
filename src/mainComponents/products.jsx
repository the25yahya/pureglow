import Product from "./product";
import Category from "./category";
import "../mainComponentsCss/products.css"
import serum from '../imgs/serum.png'
import cleanser from '../imgs/cleanser.png'
import eyeCare from '../imgs/eyeCare.png'
import mask from '../imgs/mask.png'
import moisturizer from '../imgs/moisturizer.png'
import sunscreen from '../imgs/sunscreen.png'
function Products(){
    return(
        <div className="products">
         <div className="products-nav">
           <h1>shop by category</h1>
           <div className="categories">
            <Category
                title="Cleansers"
                src={cleanser}
            />
            <Category
                title="serums"
                src={serum}
            />
            <Category
                title="Eye Care"
                src={eyeCare}
            />
            <Category
                title="Moisturizers"
                src={moisturizer}
            />
            <Category
                title="masks"
                src={mask}
            />
            <Category
                title="Face Sunscreen"
                src={sunscreen}
            />
           </div>
         </div>
         <Product/>
        </div>
    )
}

export default Products;
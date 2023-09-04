import Product from "./product";
import Category from "./category";
import "../mainComponentsCss/products.css"
function Products(){
    return(
        <div className="products">
         <div className="products-nav">
           <h1>shop by category</h1>
           <div className="categories">
            <Category
                title="Cleansers"
                src="https://www.sephora.com/productimages/sku/s2534683-main-zoom.jpg?pb=2020-03-sephora-clean-2019"
            />
            <Category
                title="serums"
                src="https://angelcare.ma/2001-large_default/-caudalie-resveratrol-lift-serum-fermete-30-ml.jpg"
            />
            <Category
                title="Eye Care"
                src="https://discoverpilgrim.com/cdn/shop/products/squalane-roll-on-under-eye-serum-358720.jpg?v=1683284844&width=1024"
            />
            <Category
                title="Moisturizers"
                src="https://plumgoodness.com/cdn/shop/products/12_Listing_1080x1080_e52f8db1-fbe2-4e86-9a41-961dd6e05a52_grande.webp?v=1689146742"
            />
            <Category
                title="masks"
                src="https://www.pacificabeauty.com/cdn/shop/products/PAC_WAKE_UP_BEAUTIFUL_FACIAL_MASK_1200x.jpg?v=1658590271"
            />
            <Category
                title="Face Sunscreen"
                src="https://bondisands.eu/cdn/shop/files/BONDISANDSSPF50_BODYSUNSCREENTUBECOCONUTSCENT150mL_UK_9_600x.jpg?v=1688727327"
            />
           </div>
         </div>
         <Product/>
        </div>
    )
}

export default Products;
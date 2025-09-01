import { Card } from "./Card";
export function ShoppingMain({allProducts}){




    return(
        <div className="shopping-main">
            <div className="card-grid-container">
                {allProducts.map(product => <Card key={product.id} productInfo={product}></Card>)} 
            </div>
        </div>
    )

}
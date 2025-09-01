export function Card({productInfo}){
    return (
        <div className="card">
            <div className="visual">
                <img src={productInfo.image} alt="" />

            </div>
            <div className="info-text">
                <div className="category">
                    {productInfo.category}
                </div>
                <div className="price">
                    {priceConverter(productInfo.price)}
                </div>
                <div className="name">
                    <h4>{productInfo.title}</h4>
                </div>
                {/* <div className="description">
                    {productInfo.description}

                </div> */}



            </div>
        </div>
    )
}

function priceConverter(price){

    const parts = price.toString().split('.');
    if (parts.length === 1) {
        return `${parts[0]}.-`;
    } else if (parts[1].length === 1) {
        return `${parts[0]}.${parts[1]}0`;
    } else if (parts[1].length === 2) {
        return `${parts[0]}.${parts[1]}`;
    } else {
        return `${parts[0]}.${parts[1].slice(0,2)}`;
    }

}
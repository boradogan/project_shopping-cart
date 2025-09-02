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
export default priceConverter
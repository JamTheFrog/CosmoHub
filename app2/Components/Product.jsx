const Product = (props) => {
    return(
        <div>
            <h1>{props.item.title}</h1>
            <h3>{props.item.title}</h3>
            <h4>{props.item.price}</h4>
        </div>
    )
}
export default Product;
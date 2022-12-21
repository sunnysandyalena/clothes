function Clothes ({products}) {
    return (
        <div className="products">
            {products.map((item => {
                const {id, name, searchTerm, price, image} = item;
                return <div className="product-card" key={id}>
                    <div>
                        <img src = {image} width = "300px" alt="Clothes"/>
                    </div>
                    <div>
                        <h3>{name}</h3>
                    </div>
                    <div>
                        <h4>${price}</h4>
                    </div>
            
                </div>
            }))}
        </div>
    )
}

export default Clothes;
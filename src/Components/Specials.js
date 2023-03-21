function ItemCard(image, name, price, description) {
    return (
        <>
            <img src={image}></img>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <p>{description}</p>
            <h4>Order A Delivery</h4>
        </>
    )
}

function Specials() {
    const items = [
        {"image": "./images/greeksalad.png",
        "name": "Greek Salad",
        "price": 12.95,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
        {"image": "./images/bruchetta.png",
        "name": "Bruchetta",
        "price": 5.95,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
        {"image": "./images/lemondessert.png",
        "name": "Lemon Dessert",
        "price": 12.95,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
    ]

    return (
        <>
            <h1>Specials</h1>
            <button>Online Menu</button>
            {items.map((item) => <ItemCard image={item.image} name={item.name} price={item.price} description={item.description}></ItemCard>)}
        </>
    )
}

export default Specials;
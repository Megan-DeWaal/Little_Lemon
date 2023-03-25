function Specials() {
    const items = [
        {image: "./images/greeksalad.png",
        name: "Greek Salad",
        price: 12.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
        {image: "./images/bruchetta.png",
        name: "Bruchetta",
        price: 5.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
        {image: "./images/lemondessert.png",
        name: "Lemon Dessert",
        price: 12.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "},
    ]

    return (
        <>
            <h1>Specials</h1>
            <button>Online Menu</button>
            {items.map((item, i) => (
                <article key={i}>
                    <img src={item.image}></img>
                    <h3>{item.name}</h3>
                    <h4>${item.price}</h4>
                    <p>{item.description}</p>
                    <h4>Order A Delivery</h4>
                </article>
            ))}
        </>
    )
}

export default Specials;
function Testimonials() {
    const ratings = [
        {rating: "5",
        name: "Alice", 
        comment: "Lorem ipsum dolor sit amet, magna aliqua. "}, 
        {rating: "4.8",
        name: "Ben", 
        comment: "Lorem ipsum dolor sit amet, magna aliqua. "},
        {rating: "5",
        name: "Kim", 
        comment: "Lorem ipsum dolor sit amet, magna aliqua. "},
        {rating: "4.6",
        name: "Sam", 
        comment: "Lorem ipsum dolor sit amet, magna aliqua. "},
    ]

    return (
        <>
            {ratings.map((item, i) => (
                <article key={i}>
                    <h4>Rating</h4>
                    <h4>{item.rating}</h4>
                    <img src="star.png"></img>
                    <h5>{item.name}</h5>
                    <p>{item.comment}</p>
                </article>
            ))}
        </>
    )
}

export default Testimonials;
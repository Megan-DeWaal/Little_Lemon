function RatingCard(rating, name, comment) {
    return (
        <>
            <h4>Rating</h4>
            <h4>{rating}</h4>
            <img src="star.png"></img>
            <h5>{name}</h5>
            <p>{comment}</p>
        </>
    )
}

function Testimonials() {
    const ratings = [
        {"rating": "5",
        "name": "Alice", 
        "comment": "Lorem ipsum dolor sit amet, magna aliqua. "}, 
        {"rating": "4.8",
        "name": "Ben", 
        "comment": "Lorem ipsum dolor sit amet, magna aliqua. "},
        {"rating": "5",
        "name": "Kim", 
        "comment": "Lorem ipsum dolor sit amet, magna aliqua. "},
        {"rating": "4.6",
        "name": "Sam", 
        "comment": "Lorem ipsum dolor sit amet, magna aliqua. "},
    ]

    return (
        <>
            {ratings.map((item) => <RatingCard rating={item.rating} name={item.name} comment={item.comment}></RatingCard>)}
        </>
    )
}

export default Testimonials;
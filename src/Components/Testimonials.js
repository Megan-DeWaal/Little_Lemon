import { ImageAssets } from "../assets/ImageAssets";

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
        <div className="ratings">
            <h1 className="black">Testimonials</h1>
            <div>
                {ratings.map((item, i) => (
                    <article key={i}>
                        <h3>Rating</h3>
                        <div>
                            <h4>{item.rating}</h4>
                            <img src={ImageAssets.star} alt="star" className="star"></img>
                            <h4>{item.name}</h4>
                        </div>
                        <p className="black">{item.comment}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;
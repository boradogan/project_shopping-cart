import { RatingStar } from "./RatingStar";
export function RatingComponent({rating}){
    const ratingArray = convertRating(rating);

    return(
        <div className="rating">
            {ratingArray.map((rating, index) => (
                <RatingStar key={index} fillValue={rating}></RatingStar>
            ))}
        </div>
    )


}

function convertRating(rating){
    //Converts the rating
    //ex: 3.9 => [1, 1, 1, 0.9, 0]
    let remainingRating = rating;

    const newArray = new Array(5).fill(0);
    for (const index in newArray) {
        newArray[index] = (remainingRating > 1)? 1 : remainingRating;
        remainingRating = remainingRating - newArray[index];
    }
    return newArray;

}

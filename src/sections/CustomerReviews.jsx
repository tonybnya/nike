import { reviews } from '../constants'; 
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl font-bold text-center">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="flex flex-1 justify-evenly mt-24 items-center gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            customerName={review.customerName}
            imgURL={review.imgURL}
            feedback={review.feedback}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews;
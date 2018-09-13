@homes.each do |home|
  json.set! home.id do
    json.partial! 'home', home: home
    json.reviewIds []
    json.bookingIds []

    home.reviews.each do |review|
      json.reviews do
        json.set! review.id do
          json.partial! '/api/reviews/review', review: review
        end
      end
    end

    json.averageReviewRating 0
  end
end

# json.home do
#   json.partial! '/api/homes/home', home: @home
#   json.reviewIds @home.reviews.pluck(:id)
# end


json.partial! '/api/homes/home', home: @home
json.bookingIds @home.bookings.pluck(:id)


@home.bookings.includes(:user).each do |booking|
  json.bookings do
    json.set! booking.id do
      json.partial! '/api/bookings/booking', booking: booking
    end
  end

  json.users do
    json.set! booking.user.id do
      json.extract! booking.user, :id, :e_mail
    end
  end
end


# @home.reviews.includes(:user).each do |review|
#   json.reviews do
#     json.set! review.id do
#       json.partial! '/api/reviews/review', review: review
#     end
#   end
#
#   json.users do
#     json.set! review.user.id do
#       json.extract! review.user, :id, :e_mail
#     end
#   end
# end

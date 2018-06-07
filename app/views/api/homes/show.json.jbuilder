json.partial! '/api/homes/home', home: @home
# json.reviewIds @home.reviews.pluck(:id)


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

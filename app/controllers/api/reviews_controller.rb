class Api::ReviewsController < ApplicationController
  before_action :require_login, only: [:create, :destroy]

  def index
    #called to assist in cross referencing total # of reviews to # of bookings
    @reviews = Review.where(user_id: current_user.id)
  end

  def create
    debugger
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    debugger

    if @review.save!
      debugger
      render "/api/reviews/create"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  # def update
  #   @review = review.find(params[:booking_id])
  #
  #   if @review
  #     @review.update(review_params)
  #     render "/api/reviews/create"
  #   else
  #     render json: @review.errors.full_messages, status: 422
  #   end
  # end
  #
  # def destroy
  #   @review = Review.find(params[:id])
  #   @review.destroy!
  # end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :home_id, :booking_id)
  end

end

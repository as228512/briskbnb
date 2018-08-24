class Api::ReviewsController < ApplicationController
  before_action :require_login, only: [:create, :destroy]

  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render "/api/reviews/create"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
  end

  def review_params
    params.require(:review).permit(:body, :rating)
  end

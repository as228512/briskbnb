class Api::ReviewsController < ApplicationController
  before_action :require_login, only: [:create, :destroy]

  def index
    @reviews = Review.all
  end

  def create
    @review = Review.create!(review_params)
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
  end



  private

  def review_params
    params.require(:review).permit(:body, :rating)
  end

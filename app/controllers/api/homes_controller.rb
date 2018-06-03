require 'byebug'

class Api::HomesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    homes = bounds ? Home.in_bounds(bounds) : Home.all
    @homes = homes

  end

  def show
    @home = Home.find(params[:id])
  end

  def create
    @home = Home.create!(home_params)
    render :show
  end

  private

  def home_params
    params.require(:home).permit(:lat, :long, :description, :title, :price)
  end

  def bounds
    params[:bounds]
  end
end

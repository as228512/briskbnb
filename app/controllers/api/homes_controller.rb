class Api::HomesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    if bounds
      homes = Home.in_bounds(bounds)

    elsif trips
      homes = Home.booked_trips(trips)

    else
      homes = Home.all
    end

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

  def trips
    params[:trips]
  end
end

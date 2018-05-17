class Api::HomesController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    homes = homes ? Home.in_bound(bounds) : Home.all

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
    params.require(:home).permit(:lat, :long, :description)
  end

  def bounds
    params[:bounds]
  end
end

class Api::BookingsController < ApplicationController
  before_action :require_login, only: [:create, :destroy]

  def index
    @bookings = Booking.where(user_id: @booking.user_id)
    debugger
  end

  def create
    debugger
    @booking = current_user.bookings.new(booking_params)
    @booking.user_id = current_user.id

    booking_valid = true
    Booking.where(home_id: @booking.home_id).find_each do |booking|
      if @booking.start_date < booking.start_date &&
         @booking.end_date < booking.start_date ||
         @booking.start_date > booking.end_date
          next
      else
        booking_valid = false
        break
      end
    end

    if booking_valid
      @booking.save
    else
      render json: ["Request conflicts with another reservation, please make another selection"], status: 401
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy!
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :home_id)
  end

end

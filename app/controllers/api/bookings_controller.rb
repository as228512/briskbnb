class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def create
    @booking = Booking.new(booking_params)

    bookings = Booking.find(params[:home_id])

    conflicts = 0
    bookings.each do |booking|
      if booking.start_date >= @booking.start_date ||
        booking.end_date <= @booking.end_date
          conflicts += 1
      end
    end

    if conflicts == 0
      @booking.save
    else
      render json: ["Date range already in taken"]
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy!
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date)
  end

end

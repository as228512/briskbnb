class Api::BookingsController < ApplicationController
  before_action :require_login, only: [:create, :destroy]

  def index
    #called to assist in rendering trips based on current user's bookings
    @bookings = Booking.where(user_id: current_user.id)
  end

  def create
    @booking = current_user.bookings.new(booking_params)
    @booking.user_id = current_user.id

    booking_valid = Booking.valid_booking?(@booking)

    if booking_valid
      @booking.save!
    else
      render json: ["Request conflicts with another reservation, please make another selection"], status: 401
    end
  end

  ##$$

  def update
    @booking = Booking.find(params[:id])

    if @booking
      updated_booking = {
                          start_date: @booking.start_date,
                          end_date: @booking.end_date,
                          home_id: @booking.home_id,
                          reviewed: true
                        }

      @booking.update(updated_booking)
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  ####

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy!
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :home_id)
  end
end

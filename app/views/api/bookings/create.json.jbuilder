# json.set! @booking.id do
#   json.partial! 'booking', booking: booking
# end
json.partial! "api/bookings/booking", booking: @booking

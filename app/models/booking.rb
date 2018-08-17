class Booking < ApplicationRecord

  validates :start_date, :end_date, presence: true

  belongs_to :user
  belongs_to :home

  def self.valid_booking?(new_booking)
    home_id = new_booking.home_id

    self.where(home_id: home_id).find_each do |old_booking|
      if new_booking.start_date < old_booking.start_date &&
         new_booking.end_date < old_booking.start_date ||
         new_booking.start_date > old_booking.end_date
          next
      else
        return false
      end
    end
    true
  end

end

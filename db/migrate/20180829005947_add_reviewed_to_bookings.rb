class AddReviewedToBookings < ActiveRecord::Migration[5.1]
  def change
    add_column :bookings, :reviewed, :boolean, default: false
  end
end

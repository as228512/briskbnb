class AddBookingToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :booking_id, :integer

    add_index :reviews, :booking_id
  end
end

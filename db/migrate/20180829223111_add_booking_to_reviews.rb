class AddBookingToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :booking_id, :integer, null: false

    add_index :reviews, :booking_id
  end
end

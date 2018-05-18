class AddFurtherDetailsToHomes < ActiveRecord::Migration[5.1]
  def change
    add_column :homes, :price, :integer, null: false
    add_column :homes, :title, :string, limit: 100, null: false
  end
  add_index :homes, :user_id
end

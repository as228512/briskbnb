class AddDetailsToHomes < ActiveRecord::Migration[5.1]
  def change
    add_column :homes, :price, :integer
    add_column :homes, :title, :string, limit: 100
  end
end

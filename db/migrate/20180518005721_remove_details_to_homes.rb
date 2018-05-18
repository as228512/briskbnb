class RemoveDetailsToHomes < ActiveRecord::Migration[5.1]
  def change
    remove_column :homes, :price, :integer
    remove_column :homes, :title, :string
  end
end

class AddUrlColumnToHomes < ActiveRecord::Migration[5.1]
  def change
    add_column :homes, :home_url, :string
  end
end

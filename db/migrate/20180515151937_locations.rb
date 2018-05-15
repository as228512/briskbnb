class Locations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.float :lat, null: false
      t.float :long, null: false

      t.timestamps
    end
  end
end

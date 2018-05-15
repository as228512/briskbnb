class Homes < ActiveRecord::Migration[5.1]
  def change
    create_table :homes do |t|

      t.string :description
      t.float :lat, null: false
      t.float :long, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :homes, :user_id, unique: true
  end
end

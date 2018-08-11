class Reviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating, null: false

      t.integer :home_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :reviews, :home_id
    add_index :reviews, :user_id
  end
end

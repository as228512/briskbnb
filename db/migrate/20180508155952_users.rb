class Users < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :e_mail, null: false

      t.timestamps
    end

    add_index :users, :session_token, unique: true
    add_index :users, :e_mail, unique: true
  end
end

class RemoveUniqueIndexLimitation < ActiveRecord::Migration[5.1]
  def change
    remove_index :homes, :user_id
  end
end

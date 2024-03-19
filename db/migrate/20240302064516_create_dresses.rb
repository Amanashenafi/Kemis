class CreateDresses < ActiveRecord::Migration[7.1]
  def change
    create_table :dresses do |t|
      t.string :name, null:false
      t.integer :category, null:false
      t.string :color, null:false
      t.integer :size, null:false
      t.float :price, null:false
      t.integer :quantity, null:false

      t.timestamps
    end
  end
end

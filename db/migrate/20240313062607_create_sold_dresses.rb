class CreateSoldDresses < ActiveRecord::Migration[7.1]
  def change
    create_table :sold_dresses do |t|
      t.references :dress, null: false, foreign_key: true
      t.integer :quantity, null:false
      t.references :dress_transaction, null: false, foreign_key: true

      t.timestamps
    end
  end
end

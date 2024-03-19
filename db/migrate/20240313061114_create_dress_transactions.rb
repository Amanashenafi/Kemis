class CreateDressTransactions < ActiveRecord::Migration[7.1]
  def change
    create_table :dress_transactions do |t|
      t.datetime :date_time, null:false
      t.references :customer, null: false, foreign_key: true
      t.integer :status, null:false

      t.timestamps
    end
  end
end

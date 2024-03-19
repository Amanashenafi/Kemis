class CreateCustomers < ActiveRecord::Migration[7.1]
  def change
    create_table :customers do |t|
      t.string :firstName, null:false
      t.string :lastName
      t.string :email
      t.string :phoneNumber, null:false

      t.timestamps
    end
    add_index :customers, :phoneNumber, unique:true
  end
end

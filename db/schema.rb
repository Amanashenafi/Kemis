# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_03_13_062607) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: :cascade do |t|
    t.string "firstName", null: false
    t.string "lastName"
    t.string "email"
    t.string "phoneNumber", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["phoneNumber"], name: "index_customers_on_phoneNumber", unique: true
  end

  create_table "dress_transactions", force: :cascade do |t|
    t.datetime "date_time", null: false
    t.bigint "customer_id", null: false
    t.integer "status", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_dress_transactions_on_customer_id"
  end

  create_table "dresses", force: :cascade do |t|
    t.string "name", null: false
    t.integer "category", null: false
    t.string "color", null: false
    t.integer "size", null: false
    t.float "price", null: false
    t.integer "quantity", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sold_dresses", force: :cascade do |t|
    t.bigint "dress_id", null: false
    t.integer "quantity", null: false
    t.bigint "dress_transaction_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dress_id"], name: "index_sold_dresses_on_dress_id"
    t.index ["dress_transaction_id"], name: "index_sold_dresses_on_dress_transaction_id"
  end

  add_foreign_key "dress_transactions", "customers"
  add_foreign_key "sold_dresses", "dress_transactions"
  add_foreign_key "sold_dresses", "dresses"
end

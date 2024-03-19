FactoryBot.define do
  factory :sold_dress do
    dress
    quantity_sold { 2 }
    dress_transaction
  end
end

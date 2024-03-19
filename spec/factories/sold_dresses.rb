FactoryBot.define do
  factory :sold_dress do
    dress
    quantity { 2 }
    dress_transaction
  end
end

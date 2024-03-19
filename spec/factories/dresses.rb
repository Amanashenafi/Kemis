FactoryBot.define do
  factory :dress do
    name { Faker::Alphanumeric.alpha }
    category { 1 }
    color { Faker::Lorem.word }
    size { 1 }
    price { 1.5 }
    quantity { 10 }
  end
end

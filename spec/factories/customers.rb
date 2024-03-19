FactoryBot.define do
  factory :customer do
    firstName { Faker::Name.first_name }
    lastName { Faker::Name.last_name}
    email { Faker::Internet.email }
    phoneNumber { Faker::PhoneNumber.phone_number }
  end
end

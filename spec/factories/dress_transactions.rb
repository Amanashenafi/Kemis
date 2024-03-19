FactoryBot.define do
  factory :dress_transaction do
    date_time {Faker::Time.between(from: 2.years.ago, to: Time.now)}
    customer
    status { 0 }
  end
end

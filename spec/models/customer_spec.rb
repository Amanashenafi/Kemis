require 'rails_helper'

RSpec.describe Customer, type: :model do
  subject {create(:customer)}
  it{should validate_presence_of(:firstName)}
  it{should validate_presence_of(:phoneNumber)}
  it{should validate_uniqueness_of(:phoneNumber).case_insensitive}
  it{should have_many(:dress_transaction)}

end

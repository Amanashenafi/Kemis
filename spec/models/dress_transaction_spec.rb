require 'rails_helper'

RSpec.describe DressTransaction, type: :model do
  subject {create(:dress_transaction)}
  it{should validate_presence_of(:date_time)}
  it{should validate_presence_of(:status)}
  it{should belong_to(:customer)}
  it{should have_many(:soldDress)}





end

require 'rails_helper'

RSpec.describe Dress, type: :model do
  subject {create(:dress)}
  it{should validate_presence_of(:name)}
  it{should validate_presence_of(:category)}
  it{should validate_presence_of(:color)}
  it{should validate_presence_of(:size)}
  it{should validate_presence_of(:price)}
  it{should validate_presence_of(:quantity)}
  it{should validate_numericality_of(:quantity).is_greater_than(0)}
  it{should validate_numericality_of(:price).is_greater_than(0)}
  it{should have_many(:sold_dress)}
end

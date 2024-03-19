require 'rails_helper'

RSpec.describe SoldDress, type: :model do
  subject {create(:sold_dress)}
  it{should validate_presence_of(:quantity_sold)}
  it{should belong_to(:dress)}
  it{should belong_to(:dress_transaction)}

end

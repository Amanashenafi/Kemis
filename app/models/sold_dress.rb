class SoldDress < ApplicationRecord
  belongs_to :dress
  belongs_to :dress_transaction
  validates :quantity_sold, presence:true
end

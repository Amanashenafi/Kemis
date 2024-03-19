class Customer < ApplicationRecord
  has_many :dress_transaction
  validates :phoneNumber, uniqueness: {case_sensitive:false}
  validates :firstName, :phoneNumber, presence:true
  
end

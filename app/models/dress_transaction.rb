class DressTransaction < ApplicationRecord
  belongs_to :customer
  has_many :soldDress

  enum :status, {pending:0, completed:1}
  validates :date_time, :status, presence:true
end

class DressTransaction < ApplicationRecord
  enum :status, {pending:0, completed:1}
  belongs_to :customer
  has_many :soldDress
  validates :date_time, :status, presence:true
end


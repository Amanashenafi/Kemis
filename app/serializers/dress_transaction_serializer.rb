class DressTransactionSerializer < ActiveModel::Serializer
  belongs_to :customer
  attributes :id, :date_time, :status
end

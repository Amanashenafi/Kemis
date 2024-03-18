class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :phoneNumber, :email
end

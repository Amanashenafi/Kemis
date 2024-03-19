class DressSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :color, :size, :price, :quantity
end

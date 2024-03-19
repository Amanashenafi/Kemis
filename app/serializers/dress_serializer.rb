class DressSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :color, :size, :price, :quantity, :img_url
end

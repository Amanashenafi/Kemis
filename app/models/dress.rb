class Dress < ApplicationRecord
  has_many :sold_dress

  enum :size, {XS:0, S:1, M:2, L:3, XL:4, XXL:5 }
  enum :category, {formal:0, semi_formal:1, casual:2, chiffon:3, habesha:4}
  validates :name, :category, :color, :size, :price, :quantity, presence:true
  validates :price, :quantity, numericality: {greater_than: 0}

end

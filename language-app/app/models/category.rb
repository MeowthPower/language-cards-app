class Category < ActiveRecord::Base
  has_many :tags
  has_many :cards, through: :tags
end
class Category < ActiveRecord::Base
  has_many :cards, through: :tags
end
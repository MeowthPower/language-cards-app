class Card < ActiveRecord::Base
  has_many :users, through: :favorites
  has_many :users, through: :translations
  has_many :categories, through: :tags
end
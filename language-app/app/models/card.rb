class Card < ActiveRecord::Base
  has_many :favorites
  has_many :users, through: :favorites

  has_many :translations
  has_many :users, through: :translations

  has_many :tags
  has_many :categories, through: :tags
end
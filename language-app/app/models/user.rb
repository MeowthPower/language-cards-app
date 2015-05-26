class User < ActiveRecord::Base
  has_secure_password
  has_many :cards, through: :favorites
  has_many :cards, through: :translations
end
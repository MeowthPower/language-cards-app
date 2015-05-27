class User < ActiveRecord::Base

  has_secure_password
  has_many :favorites
  has_many :cards, through: :favorites
  
  has_many :translations
  has_many :cards, through: :translations

  validates :username, presence: true
  validates :username, uniqueness: true
end
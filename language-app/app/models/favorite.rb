class Favorite < ActiveRecord::Base
  belongs_to :cards
  belongs_to :users
end
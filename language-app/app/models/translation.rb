class Translation < ActiveRecord::Base
  belongs_to :cards
  belongs_to :users
end
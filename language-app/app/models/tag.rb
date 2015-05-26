class Tag < ActiveRecord::Base
  belongs_to :cards
  belongs_to :categories
end
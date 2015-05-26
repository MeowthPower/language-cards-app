class Tag < ActiveRecord::Base
  belongs_to :card
  belongs_to :category
end
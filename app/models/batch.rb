class Batch < ActiveRecord::Base
  has_many :startups
  validates_presence_of :name
end

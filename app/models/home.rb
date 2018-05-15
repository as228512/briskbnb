class Home < ApplicationRecord
  validates :description, :lat, :long, presence: true

  #each home has 1 creator
  belongs_to :user

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

end

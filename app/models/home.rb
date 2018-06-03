class Home < ApplicationRecord
  validates :description, :lat, :long, :title, :price, presence: true

  has_attached_file :image, default_url: "some_dude.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  #each home has 1 creator
  belongs_to :user
  has_many :bookings


  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("long > ?", bounds[:southWest][:lng])
      .where("long < ?", bounds[:northEast][:lng])
  end

end

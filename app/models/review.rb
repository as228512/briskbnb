class Review < ApplicationRecord

  validates :body, :rating, presence: true
  validates :rating, numericality: { greater_than: 0, less_than: 6 }

  belongs_to :user
  belongs_to :home
  belongs_to :booking
end

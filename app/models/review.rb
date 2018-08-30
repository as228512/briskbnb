class Review < ApplicationRecord

  validates :body, :rating, presence: true

  belongs_to :user
  belongs_to :home
  belongs_to :booking
end

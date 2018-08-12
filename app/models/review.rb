class Review < ApplicationRecord

  validates :body, :rating, presense: true

  belongs_to :user
  belongs_to :home
end

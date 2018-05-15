class User < ApplicationRecord
  validates :fname, :lname, :e_mail, :password_digest, :session_token, presence: true
  validates :e_mail, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :homes

  has_attached_file :image, default_url: "some_dude.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(e_mail, password)
    user = User.find_by(e_mail: e_mail)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end

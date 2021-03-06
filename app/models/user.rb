class User < ApplicationRecord
    attr_reader :password

    validates :password, length: {minimum: 6},allow_nil: true 
    validates :username,
              :email,
              :age,
              :gender,
              :session_token,
              :password_digest,
              presence: true
    validates :username, :email, uniqueness: true
  

    after_initialize :ensure_session_token

    has_many :songs, 
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Song
    

    has_many :comments, 
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Comment
    

    has_many :playlists, 
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Playlist

    has_one_attached :photo
    has_one_attached :backphoto
    


    #figvaper

    def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!

        self.session_token
    end

end
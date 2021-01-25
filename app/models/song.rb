class Song < ApplicationRecord
    validates :artist_id, :title, presence: true
    validates :artist_id, unique: true 

    belongs_to :user,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :User
end

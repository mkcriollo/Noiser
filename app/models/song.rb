class Song < ApplicationRecord
    validates :artist_id, :title, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :User

    has_many :comments,
        foreign_key: :song_id,
        class_name: :Comment,
        dependent: :destroy

    has_one_attached :photo
    has_one_attached :song
end

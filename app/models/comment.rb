class Comment < ApplicationRecord
    validates :author_id, :song_id, :body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :song,
        foreign_key: :song_id,
        class_name: :Song

    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment,
        dependent: :destroy
end

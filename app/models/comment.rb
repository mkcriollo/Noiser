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

    has_many :child_comments,
        class_name: :Comment,
        foreign_key: :parent_comment_id,
        primary_key: :id

    belongs_to :parent_comment,
        class_name: :Comment,
        foreign_key: :parent_comment_id,
        primary_key: :id,
        optional: true
end

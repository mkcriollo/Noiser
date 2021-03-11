class Like < ApplicationRecord
    validates :user_id, presence: :true
    validates :likeable_type, presence: :true
    validates :likeable_id, presence: :true


end

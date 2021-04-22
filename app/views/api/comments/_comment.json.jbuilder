json.extract! comment, :id, :author_id, :song_id, :body, :created_at, :author
json.photoUrl url_for(comment.author.photo) if comment.author.photo.attached?

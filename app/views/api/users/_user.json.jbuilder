json.extract! user, :id, :username, :email, :age, :gender
json.photoUrl url_for(user.photo) if user.photo.attached?
json.backPhotoUrl url_for(user.backphoto) if user.backphoto.attached?

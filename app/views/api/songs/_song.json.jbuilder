json.extract! song, :id, :title, :description, :genre, :artist_id 
json.photoUrl url_for(song.photo) if song.photo.attached?
json.songUrl url_for(song.song) if song.song.attached?
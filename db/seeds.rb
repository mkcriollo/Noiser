# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

#users

user1 = User.create!(email: "kidcudi@gmail.com", password: "password123",username: "Kid Cudi", age: 36, gender: "male")
user2 = User.create!(email: "travisscott@gmail.com", password: "password123",username: "Travis Scott", age: 28, gender: "male")
user3 = User.create!(email: "asaprocky@gmail.com", password: "password123",username: "Asap Rocky", age: 32, gender: "male")
user4 = User.create!(email: "kodakblack@gmail.com", password: "password123",username: "Kodak Black", age: 23, gender: "male")
user5 = User.create!(email: "kendricklamar@gmail.com", password: "password123",username: "Kendrick Lamar", age: 33, gender: "male")
user6 = User.create!(email: "trippered@gmail.com", password: "password123",username: "Trippe Red", age: 21, gender: "male")
user7 = User.create!(email: "schoolboyQ@gmail.com", password: "password123",username: "SchoolBoy Q", age: 34, gender: "male")
user8 = User.create!(email: "isaiahrashad@gmail.com", password: "password123",username: "Isaiah Rashad", age: 29, gender: "male")
user9 = User.create!(email: "kanyewest@gmail.com", password: "password123",username: "Kanye West", age: 43, gender: "male")
user10 = User.create!(email: "sheckwes@gmail.com", password: "password123",username: "Sheck Wes", age: 22, gender: "male")


# # # user1 = User.new(email: "example1", password: "password1",username: "Asap Rocky", age: 23, gender: "male")

# # #songs seed

# # # song1 = Song.create!(Title:"Rock with You" genre: "80's", description: "Written by Michael Jackson", artist_id: 1) 
# # # song2 = Song.create!(Title:"Just the Two of Us" genre: "80's", description: "Written by Grover Washington Jr", artist_id: 2)
# # # song3 = Song.create!(Title:"Holiday" genre: "80's", description: "Written by Madonna", artist_id: 3)
# # # song4 = Song.create!(Title:"Let's Groove" genre: "80's", description: "Written by Earth Wind and Fire", artist_id: 4)
# # # song5 = Song.create!(Title:"Brother Louie" genre: "80's", description: "Written by Dieter Bohlen", artist_id: 5)
# # # song6 = Song.create!(Title:"Saying all My Love for You" genre: "80's", description: "Written by Gerry Goffin", artist_id: 6)
# # # song7 = Song.create!(Title:"Sacrifice" genre: "80's", description: "Written by Bernie Taupin", artist_id: 7)
# # # song8 = Song.create!(Title:"Funky Town" genre: "80's", description: "Written by Lipps Inc", artist_id: 8)
# # # song9 = Song.create!(Title:"La Bamba" genre: "80's", description: "Written by los Lobos", artist_id: 9)
# # # song10 = Song.create!(Title:"Sexual Healing" genre: "80's", description: "Written by Marvin Gaye", artist_id: 10)
# # # song11 = Song.create!(Title:"Sweet Emotion" genre: "Rock", description: "Written by Aerosmith", artist_id: 11)
# # # song12 = Song.create!(Title:"La Grande" genre: "Rock", description: "Written by ZZTop", artist_id: 12)
# # # song13 = Song.create!(Title:"Highway to Hell" genre: "Rock", description: "Written by AC/DC", artist_id: 13)
# # # song14 = Song.create!(Title:"Paranoid" genre: "Rock", description: "Written by Black Sabbath", artist_id: 14)
# # # song15 = Song.create!(Title:"Crazy Train" genre: "Rock", description: "Written By Ozzy Osbourne", artist_id: 15)
# # # song16 = Song.create!(Title:"Barracuda" genre: "Rock", description: "Written By Heart", artist_id: 16)
# # # song17 = Song.create!(Title:"Welcome to the Jungle" genre: "Rock", description: "Written by Guns n Roses", artist_id: 17)
# # # song18 = Song.create!(Title:"Smells like Teen Spirit" genre: "Rock", description: "Written by Nirvana", artist_id: 18)
# # # song19 = Song.create!(Title:"Skeleton" genre: "Rock", description: "Written by Bloc Party", artist_id: 19)
# # # song1 = Song.create!(Title:"White Wedding" genre: "Rock", description: "Written by Billy Idol", artist_id: 20)



#59
song1 = Song.create!(title:"Tequila Shots", genre: "Rap", description: "Written Kid Cudi", artist_id: 103)
song1_art = URI.open("https://noiser-seed.s3.amazonaws.com/tequilashots.jpg");
song1.photo.attach(io: song1_art, filename: 'tequilashots.jpg')
song1_audio = URI.open("https://noiser-seed.s3.amazonaws.com/TequilaShots.mp3");
song1.song.attach(io: song1_audio, filename: 'TequilaShots.mp3')
#61
song2 = Song.create!(title:"Wake Up", genre: "Rap", description: "Written by Travis Scott", artist_id: 104)
song2_art = URI.open("https://noiser-seed.s3.amazonaws.com/wakeup.jpeg")
song2.photo.attach(io: song2_art, filename: 'wakeup.jpeg')
song2_audio = URI.open("https://noiser-seed.s3.amazonaws.com/WAKEUP.mp3");
song2.song.attach(io: song2_audio, filename: 'WAKEUP.mp3')
#62
song3 = Song.create!(title:"Praise The Lord", genre: "Rap", description: "Written by Asap Rocky", artist_id: 105)
song3_art = URI.open("https://noiser-seed.s3.amazonaws.com/praisethelord.png")
song3.photo.attach(io: song3_art, filename: 'praisethelord.png')
song3_audio = URI.open("https://noiser-seed.s3.amazonaws.com/PraiseTheLord.mp3");
song3.song.attach(io: song3_audio, filename: 'PraiseTheLord.mp3')
#63
song4 = Song.create!(title:"Roll in Peace", genre: "Rap", description: "Written by Kodak Black & XXXTentacion", artist_id: 106)
song4_art = URI.open("https://noiser-seed.s3.amazonaws.com/rollinpeace.jpg")
song4.photo.attach(io: song4_art, filename: 'rollinpeace.jpg')
song4_audio = URI.open("https://noiser-seed.s3.amazonaws.com/RollinPeace.mp3");
song4.song.attach(io: song4_audio, filename: 'RollinPeace.mp3')
#64
song5 = Song.create!(title:"Rigamortus", genre: "Rap", description: "Written by Kendrick Lamar", artist_id: 107)
song5_art = URI.open("https://noiser-seed.s3.amazonaws.com/rigamortis.jpg")
song5.photo.attach(io: song5_art, filename: 'rigamortis.jpg')
song5_audio = URI.open("https://noiser-seed.s3.amazonaws.com/Rigamortus.mp3");
song5.song.attach(io: song5_audio, filename: 'Rigamortus.mp3')
#65
song6 = Song.create!(title:"Topanga", genre: "Rap", description: "Witten by Trippe Red", artist_id: 108)
song6_art = URI.open("https://noiser-seed.s3.amazonaws.com/topanga.jpeg")
song6.photo.attach(io: song6_art, filename: 'topanga.jpeg')
song6_audio = URI.open("https://noiser-seed.s3.amazonaws.com/Topanga.mp3");
song6.song.attach(io: song6_audio, filename: 'Topanga.mp3')
#66
song7 = Song.create!(title:"Tookie Knows 11", genre: "Rap", description: "Written By SchoolBoy Q", artist_id: 109)
song7_art = URI.open("https://noiser-seed.s3.amazonaws.com/tookieknows.jpg")
song7.photo.attach(io: song7_art, filename: 'tookieknows.jpg')
song7_audio = URI.open("https://noiser-seed.s3.amazonaws.com/TookieKnowsII.mp3");
song7.song.attach(io: song7_audio, filename: 'TookieKnowsII.mp3')
#67
song8 = Song.create!(title:"Heavenly Father", genre: "Rap", description: "Written by Isaiah Rashad", artist_id: 110)
song8_art = URI.open("https://noiser-seed.s3.amazonaws.com/heavenlyfather.jpg")
song8.photo.attach(io: song8_art, filename: 'heavenlyfather.jpg')
song8_audio = URI.open("https://noiser-seed.s3.amazonaws.com/HeavenlyFather.mp3");
song8.song.attach(io: song8_audio, filename: 'Heavenly+Father.mp3')
#68
song9 = Song.create!(title:"Power", genre: "Rap", description: "Written by Kanye West", artist_id: 111)
song9_art = URI.open("https://noiser-seed.s3.amazonaws.com/power.png")
song9.photo.attach(io: song9_art, filename: 'power.png')
song9_audio = URI.open("https://noiser-seed.s3.amazonaws.com/POWER.mp3");
song9.song.attach(io: song9_audio, filename: 'POWER.mp3')
#69
song10 = Song.create!(title:"BEENBALLIN", genre: "Rap", description: "Written by Sheck Wes", artist_id: 112)
song10_art = URI.open("https://noiser-seed.s3.amazonaws.com/beenballing.png")
song10.photo.attach(io: song10_art, filename: 'beenballing.png')
song10_audio = URI.open("https://noiser-seed.s3.amazonaws.com/BeenBallin.mp3");
song10.song.attach(io: song10_audio, filename: 'BeenBallin.mp3')








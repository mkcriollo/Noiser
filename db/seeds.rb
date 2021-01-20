# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create!(email: "example1", password: "password1",username: "Asap Rocky", age: 23, gender: "male")
user2 = User.create!(email: "sir267", password: "password12",username: "Claro", age: 26, gender: "female")
user3 = User.create!(email: "asaprocky", password: "password123",username: "Joji", age: 34, gender: "male")
user4 = User.create!(email: "jake", password: "password1234",username: "Katy", age: 28, gender: "female")
user5 = User.create!(email: "frankocean", password: "password122",username: "Bas", age: 24, gender: "male")
user6 = User.create!(email: "jamesfranco", password: "password11",username: "Jhene", age: 56, gender: "female")
user7 = User.create!(email: "keysalicia", password: "password121",username: "SIR", age: 74, gender: "male")
user8 = User.create!(email: "Villa", password: "password154",username: "Cardi", age: 18, gender: "female")

# user1 = User.new(email: "example1", password: "password1",username: "Asap Rocky", age: 23, gender: "male")
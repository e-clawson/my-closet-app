# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
liz = User.create(first_name: "Liz", last_name: "Clawson", password:"123456", email: "emclawson1@gmail.com")
angel = User.create(first_name: "Angel", last_name: "Robiou", password:"123456", email: "angel@gmail.com")
caitlin = User.create(first_name: "Caitlin", last_name: "Baker", password:"123456", email: "cwbaker80@gmail.com")
laksh = User.create(first_name: "Laksh", last_name: "Khurana", password:"123456", email: "lakshkhurana3@gmail.com")
aiden = User.create(first_name: "Aiden", last_name: "Baker", password:"123456", email: "aiden@gmail.com")

i1 = Item.create(name:"Black Skinny Jeans", item_type:"Pants", size:"14", color:"black", description:"My favorite Jeans!", user_id: 1)
i2 = Item.create(name:"Dark Blue Floral Top", item_type:"Shirt", size:"L", color:"Navy Blue", description:"Sleeveless navy blue top with a red floral pattern", user_id: 1)

o1 = Outfit.create(name:"casual outfit", description: "good for wearing any old day!", user_id: 1)

io1 = OutfitItem.create(outfit_id: 1, item_id: 1)
io2 = OutfitItem.create(outfit_id: 1, item_id: 2)
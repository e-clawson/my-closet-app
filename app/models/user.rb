class User < ApplicationRecord
   has_many :items, dependent: :destroy 
   has_many :outfits, dependent: :destroy 
   has_many :collections, dependent: :destroy 
   
   has_secure_password
   
   # validations
   validates :email, presence: true, uniqueness: true, format: {with: /\A(?<email>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
   validates :password, length: {in: 6..25}

    def self.from_omniauth(response)
        User.find_or_create_by(uid: response[:uid], provider: response[:provider]) do |u|
            u.first_name = response[:info][:name]
            u.email = response[:info][:email]
            u.password = SecureRandom.hex(15)
        end
    end

end

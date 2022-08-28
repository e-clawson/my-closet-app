class User < ApplicationRecord
   has_many :items, dependent: :destroy 
   has_many :outfits, dependent: :destroy 
   has_many :collections, dependent: :destroy 
   
   has_secure_password
   
   # validations
   validates :email, presence: true, uniqueness: true, format: {with: /\A(?<email>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
   validates :password, length: {in: 6..25}

    def self.from_omniauth(auth)
        puts(auth)
        self.find_or_create_by(provider: auth.fetch(:provider), email: auth.fetch(:email)) do |u|
            u.first_name = auth.fetch(:first_name)
            u.last_name = auth.fetch(:last_name)
            u.email = auth.fetch(:email)
            u.password = SecureRandom.hex(10)
        end
    end

    

    # def self.from_omniauth(auth)
    #     where(email: auth.info.email).first_or_initialize do |user|
    #       user.first_name = auth.info.name
    #       user.email = auth.info.email
    #       user.password = SecureRandom.hex
    #     end
    #   end
    # def self.from_omniauth(auth)
    #     self.find_or_create_by(provider: auth.fetch(:provider), uid: auth.fetch(:uid)) do |u|
    #         u.email = auth.fetch(:email)
    #         u.password = SecureRandom.hex(20)
    #         u. = auth.fetch(:username).downcase.gsub(" ", "_")
    #     end
    # end

end

class UserSerializer#< ActiveModel::Serializer
  include JSONAPI::Serializer

  attributes :id, :first_name, :last_name, :email 
  # has_many :items, :outfit_items, :outfits
end

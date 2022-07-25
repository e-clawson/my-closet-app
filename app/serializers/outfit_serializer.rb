class OutfitSerializer #ActiveModel::Serializer
  include JSONAPI::Serializer
  attributes :id, :name, :description, :user_id

end

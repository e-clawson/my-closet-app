class OutfitSerializer #ActiveModel::Serializer
  include JSONAPI::Serializer
  attributes :id, :name, :description, :user_id, :outfit_item

end

class OutfitItemSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :outfit_id

  # attribute :items do |object|
  #   ItemSerializer.new(object.item)
  # end
end

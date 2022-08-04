class OutfitItemSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :outfit_id

  has_many :items, serializer: ItemSerializer
end

class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :size, :color, :description
end

class ItemSerializer #
  include JSONAPI::Serializer
  attributes :id, :name, :type, :size, :color, :description, :user_id
end

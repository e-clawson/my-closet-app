class ItemSerializer #
  include JSONAPI::Serializer
  attributes :id, :name, :item_type, :size, :color, :description, :user_id, :item_image

end

  #:item_image_format, :attachment_format
  # def item_image_format
  #   return unless object.avater.attached?
  #   object.item_image.blob.attributes
  #     .slice('filename', 'byte_size')
  #     .merge(url: object.image_url) 
  #     .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  # end 

  # def attachment_format
  #   return unless object.attachment.attached?

  #   object.attachment.blob.attributes
  #   .slice('filename', 'byte_size')
  #   .merge(url: object.image_url)
  #   .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  # end 

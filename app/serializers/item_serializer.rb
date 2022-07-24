class ItemSerializer #
  include JSONAPI::Serializer
  attributes :id, :name, :item_type, :size, :color, :description, :user_id

  def item_image_format
    return unless object.avater.attached?
    object.avatar.blob.attributes
      .slice('filename', 'byte_size')
      .merge(url: object.image_url)
      .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end 

  def attachment_format
    return unless object.attachment.attached?

    object.attachment.blob.attributes
    .slice('filename', 'byte_size')
    .merge(url: object.image_url)
    .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end 
  
end

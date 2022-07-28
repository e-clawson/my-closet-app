class ItemSerializer #
  include JSONAPI::Serializer
  attributes :id, :name, :item_type, :size, :color, :description, :image

  def image_format
    return unless object.image.attached?
    object.image.blob.attributes
      .slice('filename', 'byte_size')
      .merge(url: object.image_url) 
      .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end 

  def featured_image
    if object.featured_image.attached?
      {
        url: rails_blob_url(object.featured_image)
      }
    end
  end
end

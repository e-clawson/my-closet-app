class Item < ApplicationRecord
  include Rails.application.routes.url_helpers
    belongs_to :user
    has_many :outfit_items
    has_many :outfits, through: :outfit_items

    #image assoc
    has_one_attached :item_image
    has_one_attached :attachment

    #image validations
    validate :acceptable_image

    def acceptable_image
        return unless item_image.attached?
      
        unless item_image.byte_size <= 1.megabyte
          errors.add(:item_image, "is too big")
        end
      
        acceptable_types = ["image/jpeg", "image/png"]
        unless acceptable_types.include?(item_image.content_type)
          errors.add(:item_image, "must be a JPEG or PNG")
        end
    end

    def image_url
      url_for(self.item_image)
    end
end

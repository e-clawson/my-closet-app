class Item < ApplicationRecord
  include Rails.application.routes.url_helpers
    belongs_to :user
    has_many :outfit_items
    has_many :outfits, through: :outfit_items

    #image assoc
    has_one_attached :image, :dependent => :destroy

    #image validations
    validate :acceptable_image
    # validate :avatar, content_type: [:png, :jpg, :jpeg], size: { less_than: 1.megabytes , message: 'must be smaller than 1 MB' }
    # validate :attachment, content_type: { in: 'application/pdf', message: 'must be a .png, .jpg, or .jpeg file type' }

    def acceptable_image 
        return unless image.attached?
      
        unless image.byte_size <= 1.megabyte
          errors.add(:avatar, "is too big")
        end
      
        acceptable_types = ["image/jpeg", "image/png"]
        unless acceptable_types.include?(image.content_type)
          errors.add(:image, "must be a JPEG or PNG")
        end
    end

    def image_url
      url_for(self.image)
    end
end

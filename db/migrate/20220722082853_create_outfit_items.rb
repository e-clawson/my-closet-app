class CreateOutfitItems < ActiveRecord::Migration[6.1]
  def change
    create_table :outfit_items do |t|
      t.belongs_to :outfit
      t.belongs_to :item

      t.timestamps
    end
  end
end

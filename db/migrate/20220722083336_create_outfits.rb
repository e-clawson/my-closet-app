class CreateOutfits < ActiveRecord::Migration[6.1]
  def change
    create_table :outfits do |t|
      t.string :name
      t.string :description
      t.belongs_to :user
      

      t.timestamps
    end
  end
end

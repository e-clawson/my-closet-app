class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :item_type
      t.string :size
      t.string :color
      t.string :description
      t.belongs_to :user

      t.timestamps
    end
  end
end

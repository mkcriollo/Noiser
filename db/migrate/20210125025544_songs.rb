class Songs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false 
      t.integer :artist_id, null: false 
      t.text :description
      t.string :genre
      
      t.timestamps
    end

    add_index :songs, :artist_id, unique: true
  end
end

class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false 
      t.integer :age, null: false
      t.string :gender, null: false 
      t.string :session_token, null: false
      t.string :password_digest, null: false 

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end

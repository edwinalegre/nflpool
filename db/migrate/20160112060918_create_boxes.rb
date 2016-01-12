class CreateBoxes < ActiveRecord::Migration
  def change
    create_table :boxes do |t|
      t.string :firstname
      t.string :lastname
      t.string :initials
      t.string :boxid

      t.timestamps null: false
    end
  end
end

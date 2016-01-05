class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.string :email
      t.string :passcode
      t.string :hometeam
      t.string :awayteam

      t.timestamps null: false
    end
  end
end

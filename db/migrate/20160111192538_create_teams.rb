class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :team
      t.string :city
      t.string :color1
      t.string :color2
      t.string :helmet

      t.timestamps null: false
    end
  end
end

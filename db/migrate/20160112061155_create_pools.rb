class CreatePools < ActiveRecord::Migration
  def change
    create_table :pools do |t|
      t.string :name
      t.string :email
      t.string :passcode
      t.string :hometeam
      t.string :homecity
      t.string :homecolor1
      t.string :homecolor2
      t.string :homehelmet
      t.string :awayteam
      t.string :awaycity
      t.string :awaycolor1
      t.string :awaycolor2
      t.string :awayhelmet
      t.string :x0
      t.string :x1
      t.string :x2
      t.string :x3
      t.string :x4
      t.string :x5
      t.string :x6
      t.string :x7
      t.string :x8
      t.string :x9
      t.string :y0
      t.string :y1
      t.string :y2
      t.string :y3
      t.string :y4
      t.string :y5
      t.string :y6
      t.string :y7
      t.string :y8
      t.string :y9

      t.timestamps null: false
    end
  end
end

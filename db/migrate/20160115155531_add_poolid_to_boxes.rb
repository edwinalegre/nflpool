class AddPoolidToBoxes < ActiveRecord::Migration
  def change
    add_column :boxes, :poolid, :string
  end
end

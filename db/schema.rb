# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160112061155) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boxes", force: :cascade do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "initials"
    t.string   "boxid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pools", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "passcode"
    t.string   "hometeam"
    t.string   "homecity"
    t.string   "homecolor1"
    t.string   "homecolor2"
    t.string   "homehelmet"
    t.string   "awayteam"
    t.string   "awaycity"
    t.string   "awaycolor1"
    t.string   "awaycolor2"
    t.string   "awayhelmet"
    t.string   "x0"
    t.string   "x1"
    t.string   "x2"
    t.string   "x3"
    t.string   "x4"
    t.string   "x5"
    t.string   "x6"
    t.string   "x7"
    t.string   "x8"
    t.string   "x9"
    t.string   "y0"
    t.string   "y1"
    t.string   "y2"
    t.string   "y3"
    t.string   "y4"
    t.string   "y5"
    t.string   "y6"
    t.string   "y7"
    t.string   "y8"
    t.string   "y9"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string   "team"
    t.string   "city"
    t.string   "color1"
    t.string   "color2"
    t.string   "helmet"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

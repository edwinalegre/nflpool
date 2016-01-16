module Api
  class PoolsController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      pools = Pool.all
      render json: pools, only: [:id, :name, :email, :passcode, :hometeam, :homecity, :homecolor1, :homecolor2, :homehelmet, :awayteam, :awaycity, :awaycolor1, :awaycolor2, :awayhelmet, :x0, :x1, :x2, :x3, :x4, :x5, :x6, :x7, :x8, :x9, :y0, :y1, :y2, :y3, :y4, :y5, :y6, :y7, :y8, :y9]
    end
  end
end
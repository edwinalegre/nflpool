module Api
  class TeamsController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      teams = Team.all
      render json: teams, only: [:id, :team, :city, :color1, :color2, :helmet]
    end
  end
end
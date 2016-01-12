module Api
  class BoxesController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      boxes = Box.all
      render json: boxes, only: [:firstname, :lastname, :initials, :boxid]
    end
  end
end
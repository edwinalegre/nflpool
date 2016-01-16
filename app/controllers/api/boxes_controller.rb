module Api
  class BoxesController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      boxes = Box.all
      render json: boxes, only: [:id, :firstname, :lastname, :initials, :boxid, :poolid]
    end
  end
end
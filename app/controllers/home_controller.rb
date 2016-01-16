class HomeController < ApplicationController
  def index
    @users = Pool.all
  end

  def show
    @pool = Pool.find(params[:id])
  end
end

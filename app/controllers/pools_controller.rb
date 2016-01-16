class PoolsController < ApplicationController

  def index
    @pool = Pool.all
  end

  def show
    @pool = Pool.find(params[:id])
    @boxes = Box.where(poolid: params[:id])
  end
end
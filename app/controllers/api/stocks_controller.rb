class Api::StocksController < ApplicationController

  # before_action :require_logged_in, only: [:show]

  def show
    @stock = Stock.find_by(symbol: params[:symbol])
    unless @stock
      render json: ['Stock symbol not found'], status: 404
    end
  end

end
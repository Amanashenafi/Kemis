class DressesController < ApplicationController
  def index
    dresses = Dress.all
    render json:dresses
  end

  def show
    dress = Dress.find(params[:id])
    render json:dress
  end

  def create
    dress = Dress.create!(model_params)
    render json:dress
  rescue ActiveRecord::RecordInvalid => e
    render json: {error:e.message}
  end

  def update
    dress = Dress.find(params[:id])
    dress.update!(model_params)
    render json:dress
  rescue ActiveRecord::RecordInvalid => e
    render json: {error:e.message}
  end

  def destroy
    dress = Dress.find(params[:id])
    dress.destroy!
    render json: {message: "deletion successful"}
  rescue ActiveRecord::RecordInvalid => e
    render json: {error: e.message}
  end



  private
    def model_params
      params.require(:dress).permit(:id, :name, :category, :color, :size, :price, :quantity)
    end




end

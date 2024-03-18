class CustomersController < ApplicationController
  def index
    customers = Customer.all
    render json:customers
  end

  def show
    customer = Customer.find(params[:id])
    render json:customer
  end

  def create
    customer = Customer.create!(model_params)
    render json:customer
  rescue ActiveRecord::RecordInvalid => e
    render json: {error:e.message}
  end

  def update
    customer = Customer.find(params[:id])
    customer.update!(model_params)
    render json:customer
  rescue ActiveRecord::RecordInvalid => e
    render json: {error:e.message}
  end

  def destroy
    customer = Customer.find(params[:id])
    customer.destroy!
    render json: {message: "deletion successful"}
  rescue ActiveRecord::RecordInvalid => e
    render json: {error: e.message}
  end



  private
    def model_params
      params.require(:customer).permit(:id, :firstName, :lastName, :phoneNumber, :email)
    end




end

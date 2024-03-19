class DressTransactionsController < ApplicationController
  def index
    transactions= DressTransaction.all
    render json:transactions
  end
  
  def show
    transaction = DressTransaction.find(params[:id])
    render json:transaction
  end

 def begin_transaction
    sold_dresses = params["payload"]["sold_dresses"]
    transaction_json = params["payload"]["transaction"]
    transaction = DressTransaction.create!(
      date_time: transaction_json["date_time"],
      customer_id: transaction_json["customer_id"]
    )
    sold_dresses.each do |sold_dress|
      SoldDress.create(
        dress_transaction:transaction,
        dress_id: sold_dress["dress_id"],
        quantity: sold_dress["quantity"]
      )
    end
    service = TransactionService.new
    result = service.commit(transaction)
    render json:result
  rescue => e
    render json: {error: e.message}
  end






end

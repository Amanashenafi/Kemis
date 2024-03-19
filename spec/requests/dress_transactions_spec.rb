require 'rails_helper'

RSpec.describe "DressTransactions", type: :request do
  describe "GET /index" do
    it "should give all dress transactions" do
      create_list(:dress_transaction,3)
      expect(DressTransaction.count).to eq 3
      get dress_transactions_url
      result = JSON(response.body)
      expect(result.count).to eq 3
    end
    it "displays only id, date_time, status and customer" do
      create(:dress_transaction)
      get dress_transactions_url
      result = JSON(response.body)
      expect(result[0].count).to eq 4
      expect(result[0].keys).to match_array ["id","date_time", "status", "customer"]
    end
  end

  describe "GET /show" do
    it "shows a transaction by id" do
      transaction = create(:dress_transaction)
      get dress_transaction_url(transaction)
      result = JSON(response.body)
      time1 = Time.parse(result["date_time"])
      time2 = transaction.date_time.strftime("%Y-%m-%d %H:%M:%S.%L %Z")
      
      expect(time1).to eq time2
      expect(result["id"]).to eq transaction.id
      expect(result["status"]).to eq transaction.status
      expect(result["customer"]["id"]).to eq transaction.customer_id
    end
  end

  describe "POST /begin_transaction" do
    it "should commit a transaction" do
      sold_dress1 = create(:sold_dress)
      sold_dress2 = create(:sold_dress)
      sold_dress3 = create(:sold_dress)
      transaction = create(:dress_transaction)
      params = {
        sold_dresses: [sold_dress1, sold_dress2, sold_dress3],
        transaction: transaction
      }
      post purchase_url, params: {payload:params}, as: :json
      result = JSON(response.body)
      expect(result["status"]).to eq "completed"
    end
    it "should raise an error when more dresses are required than what is available" do
      sold_dress1 = create(:sold_dress, quantity:50)
      sold_dress2 = create(:sold_dress)
      sold_dress3 = create(:sold_dress)
      transaction = create(:dress_transaction)
      params = {
        sold_dresses: [sold_dress1, sold_dress2, sold_dress3],
        transaction: transaction
      }
      post purchase_url, params: {payload:params}, as: :json
      result = JSON(response.body)
      expect(result).not_to be_nil
      expect(result["error"]).to eq "Required quantity is morethan the available quantity"
    end
  end

    # describe "POST /create" do
  #   it "creates a transaction with the valid fields and it gets committed" do
  #     customer = create(:customer)
  #     params = {
  #       date_time:Time.now.utc,
  #       status:"pending",
  #       customer_id: customer.id
  #     }
  #     post dress_transactions_url, params: {dress_transaction:params}, as: :json
  #     result = JSON(response.body)

  #     time1 = Time.parse(result["date_time"])
  #     time2 = params[:date_time].strftime("%Y-%m-%d %H:%M:%S.%L %Z")
  #     expect(time1).to eq time2
  #     expect(result["status"]).to eq "completed"
  #     expect(result["customer"]["id"]).to eq params[:customer_id]
  #   end
  #   it "raises an error when a transaction is created with invalid parameters" do
  #     customer = create(:customer)
  #     params = {
  #       date_time:Time.now,
  #       status:nil,
  #       customer_id: customer.id
  #     }
  #     post dress_transactions_url, params: {dress_transaction:params}, as: :json
  #     result = JSON(response.body)
  #     expect(result).not_to be_nil
  #     expect(result["error"]).to eq "Validation failed: Status can't be blank"
  #   end
  # end
end

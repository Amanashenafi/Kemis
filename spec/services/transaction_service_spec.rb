require "rails_helper"

RSpec.describe TransactionService do
  let (:service) {TransactionService.new}

  describe "#commit" do
    it "raises error if transaction is already commited" do
      transaction = create(:dress_transaction, status:"completed")
      error = "The transaction is already committed"
      expect {service.commit(transaction)}.to raise_error(StandardError, error)
    end

    it "changes status to commited" do
      transaction = create(:dress_transaction, status:"pending")
      result = service.commit(transaction)
      expect(result.status).to eq "completed"
    end

    it "subtracts from dress quantity for a commited transaction" do
      dress1 = create(:dress, quantity:50)
      dress2 = create(:dress, quantity:15)
      transaction = create(:dress_transaction)
      sold_dress1 = create(:sold_dress, dress:dress1, dress_transaction:transaction, quantity:20)
      sold_dress2 = create(:sold_dress, dress:dress2, dress_transaction:transaction, quantity:10)

      result = service.commit(transaction)
      dress1 = result.soldDress[0].dress
      dress2 = result.soldDress[1].dress
      expect(dress1.quantity).to eq(30)
      expect(dress2.quantity).to eq(5)
    end

    it "raises an error when the dress quantity is less than sold_dress quantity" do
      dress = create(:dress, quantity:50)
      transaction = create(:dress_transaction)
      sold_dress = create(:sold_dress, dress:dress, dress_transaction:transaction, quantity:100)
      error = "Required quantity is morethan the available quantity"
      expect {service.commit(transaction)}.to raise_error(StandardError, error)
    end
  end
end

class TransactionService

  def commit(transaction)

    raise(StandardError, "The transaction is already committed") if transaction.status == "completed"

    ActiveRecord::Base.transaction do
      dress_array = transaction.soldDress
      error = "Required quantity is morethan the available quantity"
      dress_array.each do |sold_dress|
        raise(StandardError, error) if sold_dress.quantity > sold_dress.dress.quantity
        sold_dress.dress.quantity-=sold_dress.quantity
      end
      dress_array.each do |sold_dress|
        sold_dress.save!
      end
      transaction.status = "completed"
      transaction.save!
    end
    transaction
  end
end

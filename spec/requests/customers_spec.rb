require 'rails_helper'

RSpec.describe "Customers", type: :request do
  describe "GET /index" do
    it "fetches all customers" do
      create_list(:customer,3)
      expect(Customer.count).to eq 3
      get customers_url
      result = JSON(response.body)
      expect(result.count).to eq 3
    end
    it "displays only id, firstName, lastName, phoneNumber, email" do
      create(:customer)
      get customers_url
      result = JSON(response.body)
      expect(result[0].count).to eq 5
      expect(result[0].keys).to match_array ["id","firstName", "lastName", "phoneNumber", "email"]
    end
  end

  describe "GET /show" do
    it "shows a customer by id" do
      customer = create(:customer)
      get customer_url(customer)

      result = JSON(response.body)
      expect(result["id"]).to eq customer.id
      expect(result["firstName"]).to eq customer.firstName
      expect(result["lastName"]).to eq customer.lastName
      expect(result["phoneNumber"]).to eq customer.phoneNumber
      expect(result["email"]).to eq customer.email
    end
  end

  describe "POST /create" do
    it "creates a customer with valid parameters" do
      params = {
        firstName:"Alex",
        lastName:"Bedada",
        phoneNumber: "251-9217-27-36",
        email: "aegon0355@gmail.com"
      }
      post customers_url, params: {customer:params}, as: :json
      result = JSON(response.body)
      expect(result["firstName"]).to eq params[:firstName]
      expect(result["lastName"]).to eq params[:lastName]
      expect(result["phoneNumber"]).to eq params[:phoneNumber]
      expect(result["email"]).to eq params[:email]
    end
    it "raises an error when a customer with invalid parameters is created" do
      params = {
        firstName:nil,
        lastName:"Bedada",
        phoneNumber: "251-9217-27-36",
        email: "aegon0355@gmail.com"
      }
      post customers_url, params: {customer:params}, as: :json
      result = JSON(response.body)
      expect(result).not_to be_nil
      expect(result["error"]).to eq "Validation failed: Firstname can't be blank"
    end
  end

  describe "PUT /update" do
    it "updates a given customer with valid parameters" do
      customer = create(:customer,firstName:"belete")
      params = {
        firstName: "Amanuel"
      }
      put customer_url(customer), params: {customer:params}, as: :json
      result = JSON(response.body)
      expect(result["firstName"]).to eq params[:firstName]
    end
    it "raises an error when trying to update with invalid parameters" do
      customer = create(:customer,firstName:"belete")
      params = {
        firstName: nil
      }
      put customer_url(customer), params: {customer:params}, as: :json
      result = JSON(response.body)
      expect(result["error"]).to eq "Validation failed: Firstname can't be blank"
    end
  end

  describe "DELETE /destroy" do
    it "deletes a customer with an id" do
      customer = create(:customer)
      delete customer_url(customer)
      result = JSON(response.body)
      expect(result["message"]).to eq "deletion successful"
    end
  end
end

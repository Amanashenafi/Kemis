require 'rails_helper'

RSpec.describe "Dresses", type: :request do
  describe "GET /index" do
    it "fetches all dresses" do
      create_list(:dress,3)
      expect(Dress.count).to eq 3
      get dresses_url
      result = JSON(response.body)
      expect(result.count).to eq 3
    end
    it "displays only id, name, category, color, size, price, quantity and img_url of a dress" do
      create(:dress)
      get dresses_url
      result = JSON(response.body)
      expect(result[0].count).to eq 8
      expect(result[0].keys).to match_array [
        "id","name", "category", "color",
        "size", "price", "quantity", "img_url"
      ]
    end
  end

  describe "GET /show" do
    it "shows a dress by id" do
      dress = create(:dress)
      get dress_url(dress)
      result = JSON(response.body)
      expect(result["id"]).to eq dress.id
      expect(result["name"]).to eq dress.name
      expect(result["category"]).to eq dress.category
      expect(result["color"]).to eq dress.color
      expect(result["size"]).to eq dress.size
      expect(result["price"]).to eq dress.price
      expect(result["quantity"]).to eq dress.quantity
      expect(result["img_url"]).to eq dress.img_url

    end
  end

  describe "POST /create" do
    it "creates a dress with valid parameters" do
      params = {
        name:"dress1",
        category:"formal",
        color: "black",
        size: "L",
        price: 3000,
        quantity: 2

      }
      post dresses_url, params: {dress:params}, as: :json
      result = JSON(response.body)
      expect(result["name"]).to eq params[:name]
      expect(result["category"]).to eq params[:category]
      expect(result["color"]).to eq params[:color]
      expect(result["size"]).to eq params[:size]
      expect(result["price"]).to eq params[:price]
      expect(result["quantity"]).to eq params[:quantity]
    end
    it "raises an error when a dress with invalid parameters is created" do
      params = {
        name:nil,
        category:"formal",
        color: "black",
        size: "L",
        price: 3000,
        quantity: 2

      }
      post dresses_url, params: {dress:params}, as: :json
      result = JSON(response.body)
      expect(result).not_to be_nil
      expect(result["error"]).to eq "Validation failed: Name can't be blank"
    end
  end

  describe "PUT /update" do
    it "updates a given dress with valid parameters" do
      dress = create(:dress,category:"formal")
      params = {
        category: "semi_formal"
      }
      put dress_url(dress), params: {dress:params}, as: :json
      result = JSON(response.body)
      expect(result["category"]).to eq params[:category]
    end
    it "raises an error when trying to update with invalid parameters" do
      dress = create(:dress,category:"formal")
      params = {
        category: nil
      }
      put dress_url(dress), params: {dress:params}, as: :json
      result = JSON(response.body)
      expect(result["error"]).to eq "Validation failed: Category can't be blank"
    end
  end

  describe "DELETE /destroy" do
    it "deletes a dress with an id" do
      dress = create(:dress)
      delete dress_url(dress)
      result = JSON(response.body)
      expect(result["message"]).to eq "deletion successful"
    end
  end
end

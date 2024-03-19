Rails.application.routes.draw do
  resources :customers
  resources :dress_transactions
  resources :dresses
  post '/purchase', to: 'dress_transactions#begin_transaction', as:'purchase'
end

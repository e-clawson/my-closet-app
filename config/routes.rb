Rails.application.routes.draw do
  
  resources :outfits
  resources :outfit_items
  resources :items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #get '/hello', to: 'application#hello_world'
  scope :api do
    scope :v1 do

      #will be a get and not post -
      #This route will direct any auth callback response to our SessionsController omniauth action with params[:provider] set to google_oauth2 in this example.
      get "/auth/:provider/callback", to: "sessions#omniauth"

      resources :users, only: [:update, :destroy] #creating show route manually with a custom route
      post "/signup", to: "users#create"
      get "/me", to: "users#show"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"

      resources :items, only: [:index, :create]
      resources :outfits, only: [:index, :create]

      # Need to figure out how to create routes for item_outfits
      # (and what routes I need for item_outfits)
    
    end
  end
end
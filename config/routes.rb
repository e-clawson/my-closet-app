Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      default_url_options :host => "http://loclhost:4000"
      #will be a get and not post?
      #This route will direct any auth callback response to our SessionsController omniauth action with params[:provider] set to google_oauth2 in this example.
      get "/auth/:provider/callback", to: "sessions#omniauth"

      resources :users, only: [:update, :destroy] #creating show route manually with a custom route
      post "/signup", to: "users#create"
      get "/me", to: "users#show"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"

      resources :outfit_items
      resources :items
      delete "/items/:id", to: "items#destroy"
      resources :outfits, only: [:index, :create]

      # Need to figure out how to create routes for item_outfits
      # (and what routes I need for item_outfits)
    
    end
  end
end
Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      default_url_options :host => "http://localhost:4000"
      #will be a get and not post?
      #This route will direct any auth callback response to our SessionsController omniauth action with params[:provider] set to google_oauth2 in this example.
      post "/auth/google_oauth2/callback", to: "sessions#omniauth"

      resources :users, only: [:update, :destroy] #creating show route manually with a custom route
      post "/signup", to: "users#create"
      get "/me", to: "users#show"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"
      get ":user_id/items", to: "items#index_items"
      get ":user_id/outfits", to: "outfits#index_outfits"

      resources :outfits
      post ":user_id/outfits", to: "outfits#create"
      get "outfits/:outfit_id", to: "outfits#index_outfit_items"
      # get ":outfit_id/outfit_items", to: "outfit#index_outfit_items"

      resources :items
     

      resources :outfit_items
      get ":user_id/outfit_items", to: "outfit_items#index"
      post ":user_id/outfititems", to: "outfits_items#create"
      get ":outfit_id/outfititems", to: "outfit_items#index_outfit_items"
      # get ":outfit_id/outfititems", to: "outfit_items#show"
  
    end
  end
end
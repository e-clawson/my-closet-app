Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #get '/hello', to: 'application#hello_world'
  scope :api do
    scope :v1 do
      resources :users, only: [:update, :destroy] #creating show route manually with a custom route
      post "/signup", to: "users#create"
      get "/me", to: "users#show"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"


    end
  end
end
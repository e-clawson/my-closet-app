class UsersController < ApplicationController
    skip_before_action :authorized!, only: [:create]
  
    def create 
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: UserSerializer.new(user), status: :created
    end
  
    def show #"/me"
      render json: UserSerializer.new(@current_user), status: :ok
    end

    def index_items # "users/:id/stories"
      user = User.find_by_id(session[:user_id])
      render json: user.items
      # else
      #     render json: {error: @post.errors.full_messages.to_sentence}
      # end
    end

    private
  
    def user_params
      params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
  
  end

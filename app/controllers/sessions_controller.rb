class SessionsController < ApplicationController
    skip_before_action :authorized!, only: [:create]

    def omniauth
        user =User.from_omniauth(request.env['omniauth.auth'])
        if user.valid?
            session[:user_id] = user.id
            redirect_to user_path(user)
        else 
            redirect_to '/login'
        end
    
    end

    def create
        user = User.find_by_email(params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id #line responsible for signing user in 
            # render json: user, status: :accepted
            render json: UserSerializer.new(user), status: :accepted
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
       end
    end

    def destroy
        session.delete(:user_id)
        head :no_content 
    end

end

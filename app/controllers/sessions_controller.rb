class SessionsController < ApplicationController
    skip_before_action :authorized!, only: [:create]

    def omniauth
        auth = {email: params["Lu"]["Bv"], uid: params["profileObj"]["googleId"], provider: params["provider"]}
        user = User.from_omniauth(auth)
        if user.id
          session[:user_id] = user.id
          render json: UserSerializer.new(user), status: :created
        else
          render json: {error: user.errors.full_messages.to_sentence}, status: :unauthorized
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

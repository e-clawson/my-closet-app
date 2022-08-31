class SessionsController < ApplicationController
    skip_before_action :authorized!, only: [:create, :omniauth]

    def omniauth
      auth = {first_name: params["profileObj"]["givenName"], last_name: params["profileObj"]["familyName"], uid: params["profileObj"]["googleId"], email: params["profileObj"]["email"], provider: params["provider"]}
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
            render json: {error: "Incorrect Sign-in Credentials, Please Retry"}, status: :unauthorized
       end
    end

    def destroy
        session.delete(:user_id)
        head :no_content 
    end

private

    def auth
      request.env['omniauth.auth']
    end

    # def authenticate
    #   authenticate_or_request_with_http_token do |token, _options|
    #     User.find_by(token: token)
    #   end
    # end

    def current_user
      @current_user ||= auth
    end
end

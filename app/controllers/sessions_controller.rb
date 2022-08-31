class SessionsController < ApplicationController
    skip_before_action :authorized!, only: [:create, :omniauth]

    # def omniauth
    #     auth = {email: params["Lu"]["Bv"], uid: params["profileObj"]["googleId"], provider: params["provider"]}
    #     user = User.from_omniauth(request.env['omniauth.auth'])
    #     if user.valid?
    #       session[:user_id] = user.id
    #       render json: UserSerializer.new(user), status: :created
    #     else
    #       render json: {error: user.errors.full_messages.to_sentence}, status: :unauthorized
    #       #if no validations, the else will just return an empty array because it won't have any errors to turn into messages
    #     end
    # end

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

    # def omniauth
    #   auth = {username: params["Lu"]["tf"], email: params["Lu"]["Bv"], uid: params["profileObj"]["googleId"], provider: params["provider"]}
    #   user = User.from_omniauth(auth)
    #   if user.id
    #     session[:user_id] = user.id
    #     render json: UserSerializer.new(user), status: :created
    #   else
    #     render json: {error: user.errors.full_messages.to_sentence}, status: :unauthorized
    #   end
    # end

    # def omniauth
    #     @user = User.find_or_create_by(email: auth["info"]["email"]) do |user|
    #       user.name= auth["info"]["first_name"]
    #       user.password= SecureRandom.hex(8)
    #     end
    #     if @user && @user.id
    #       session[:user_id] = @user.id
    #       redirect_to custom_path
    #     else
    #       redirect_to another_path
    #     end
    #   end  

    # def omniauth
    #     @user = User.from_omniauth(auth)
    #     @user.save
    #     session[:user_id] = @user.id
    #     redirect_to home_path
    # end

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

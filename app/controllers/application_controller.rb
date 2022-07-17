class ApplicationController < ActionController::API
    include ActionController::Serialization
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :no_route 
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    #wrap_parameters format: [] #relared to strong params and ability to include nested objects

    private

    def invalid_record(invalid)
        render json: {error: invalid.record.errors.full_messages.to_sentence}
    end

    def no_route
        render json: {error: "Couldn't fine a resource with id #{params[:id]}"}
    end 

end

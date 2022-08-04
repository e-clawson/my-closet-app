class OutfitsController < ApplicationController
    skip_before_action :authorized!, only: [:index]
    before_action :find_outfit, only: [:show, :update, :destroy]

    def index #get "/outfits" get "outfit/:outfit_id/items"
        if params[:outfit_id] #is there a route parameter? AKA do I come from a nested route?
            outfit = Outfit.find(params[:outfit_id])
            render json: outfit.outfit_items
        else # get "/outfits"
            render json: OutfitSerializer.new(Outfit.all).serializable_hash
        end
    end

    def show #get "/outfits/:id"
        @current_user
        render json: serialized_outfit
    end

    def create #post "/items" "users/17/items
        @outfit = current_user.outfits.create!(outfit_params)
        #if @outfit.id
        render json: serialized_outfit, status: 201
        # else
        #     render json: {error: @outfit.errors.full_messages.to_sentence}
        # end
    end

    def update #patch "/outfits/:id"
        if @outfit&.update(outfit_params)
            render json: serialized_outfit
        # else
        #     no_route
        # end
        else
            render json: {error: @outfit.errors.full_messages.to_sentence}
        end
    end

    def destroy #delete "/items/:id"
        if @outfit&.destroy
            render json: {message: "Successfully deleted outfit"}
        else
            render json: {error: @outfit.errors.full_messages.to_sentence}
        end
        # else
        #     no_route
    end

    private 
        def find_outfit
            @outfit = Outfit.find(params[:id])
        end
    
        def serialized_outfit
            @outfit.to_json(include: :outfit_items)
        end
    
        def outfit_params
            params.permit(:name, :description, :user_id )
        end
end

class OutfitItemsController < ApplicationController
    skip_before_action :authorized!, only: [:index]
    before_action :find_outfititem, only: [:show, :update, :destroy]

    def index #get "/outfititems" get "outfit/:outfit_id/items"
        params[:outfititem_id] #is there a route parameter? AKA do I come from a nested route?
            outfit_item = OutfitItem.find(params[:outfititem_id])
            render json: outfit_item, include: :items
        # else # get "/items"
        #     render json: OutfitItemSerializer.new(OutfitItem.all).serializable_hash
        # end
    end

    def index_outfit_items #get "/stories" get "prompts/:prompt_id/stories"
        if params[:outfit_id] 
            outfit = Outfit.find(params[:outfit_id])
            render json: outfit.outfit_items
        else # get "/stories"
            render json: OutfitItemSerializer.new(OutfitItem.all).serializable_hash
        end
    end

    def show #get "/items/:id"
        render json: serialized_outfititem
    end

    def create #post "/items" "users/17/items
        outfit_item = OutfitItems.create!(outfititem_params)
        #if @item.id
        # item.image.attached?
        # @item.image.attach(params[:user][:image])
        render json: serialized_item, status: 201
        # else
        #     render json: {error: @prompt.errors.full_messages.to_sentence}
        # end
    end

    def update #patch "/items/:id"
        if @item&.update(item_params)
            render json: serialized_item
        # else
        #     no_route
        # end
        else
            render json: {error: @item.errors.full_messages.to_sentence}
        end
    end

    def destroy #delete "/items/:id"
        if @outfititem&.destroy
            render json: {message: "Successfully deleted from outfit"}
        else
            render json: {error: @outfititem.errors.full_messages.to_sentence}
        end
        # else
        #     no_route
    end

    private 

        def find_outfititem
            @outfititem = OutfitItem.find(params[:id])
        end
    
        def serialized_outfititem
            @outfititem.to_json
        end
    
        def outfititem_params
            params.permit(:item_id, :outfit_id)
        end
end

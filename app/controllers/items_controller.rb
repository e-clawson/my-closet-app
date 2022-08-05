class ItemsController < ApplicationController
    skip_before_action :authorized!, only: [:index]
    before_action :find_item, only: [:show, :update, :destroy]

    def index #get "/items" get "outfit/:outfit_id/items"
        if params[:item_id] #is there a route parameter? AKA do I come from a nested route?
            item = Item.find(params[:item_id])
            render json: @user.items
        else # get "/items"
            render json: ItemSerializer.new(Item.all).serializable_hash
        end
    end

    def index_items #get "/stories" get "prompts/:prompt_id/stories"
        if params[:user_id] 
            user = User.find(params[:user_id])
            render json: user.items
        else # get "/stories"
            render json: ItemSerializer.new(Item.all).serializable_hash
        end
    end
    
    def show #get "/items/:id"
        render json: serialized_item
    end

    def create #post "/items" "users/17/items
        @item = current_user.items.create!(item_params)
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
        if @item&.destroy
            render json: {message: "Successfully deleted item"}
        else
            render json: {error: @item.errors.full_messages.to_sentence}
        end
        # else
        #     no_route
    end

    private 

        def find_item
            @item = Item.find(params[:id])
        end
    
        def serialized_item
            @item.to_json
        end
    
        def item_params
            params.permit(:item_id, :name, :item_type, :size, :color, :description, :image, :user_id)
        end
end

module Api
  class FavoritesController < ApplicationController
    def index
      # Possibly restructure with a Card search rather than a favorites search
      favorites = Favorite.where user_id: current_user[:id]
      render json: favorites.to_json( include:{ 
        card:{
          include:{
            translations:{
              include:{
                user:{
                  only: [:username]
                }
              }
            },
            categories:{
             only:[:category_name]
            }
          }
        }
      })
    end

    def create
      new_favorite = Favorite.new(params[:favorite])
      new_favorite.save
      render json: new_favorite.to_json
    end

    def destroy
      favorite = Favorite.find(params[:id])
      favorite.destroy
      # need to figure out what to render
      render json: favorite.to_json
    end
  end
end
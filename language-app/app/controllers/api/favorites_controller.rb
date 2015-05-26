module Api
  class FavoritesController < ApplicationController
    def index
      favorites = Favorite.find_by user_id: current_user[:id]
      render json: favorites.to_json( include:{ 
        cards:{
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
        })
    end

    def create
      new_favorite = Favorite.new(params[:favorite])
      new_favorite.save
      render json: new_favorite
    end

    def destroy
      favorite = Favorite.find(params[:id])
      favorite.destroy
      # need to figure out what to render
      render json: => 'ok'
    end
  end
end
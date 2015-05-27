module Api
  class CategoriesController < ApplicationController
    def index
      all_categories= Category.all()
      render json: all_categories
    end

    def show
      category = Card.find(params[:id])
      render json: category
    end
  end
end
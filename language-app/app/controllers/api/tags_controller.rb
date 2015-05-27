module Api
  class TagsController < ApplicationController

    def create
      new_tag = Tag.new({card_id: params[:card_id],category_id: params[:category_id]})
      new_tag.save
      render json: new_tag.to_json
    end

    def destroy
      poor_tag = Tag.find()
      poor_tag.destroy
      render json: poor_tag.to_json
    end

  end
end
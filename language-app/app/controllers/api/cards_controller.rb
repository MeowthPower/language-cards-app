module Api
  class CardsController < ApplicationController
    def index
      allCards= Card.all()

      render json: allCards.to_json(include: {:translations => {include: :users}})
  end

  def show

    end

  def create

  end

  def update

  end

  def destroy

  end
end
end
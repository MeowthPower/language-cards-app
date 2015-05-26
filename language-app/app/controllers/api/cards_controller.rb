module Api
  class CardsController < ApplicationController
    def index
      allCards= Card.all()
      render json: allCards
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
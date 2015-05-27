module Api
  class CardsController < ApplicationController
    def index
      all_cards= Card.all().sort_by { |card| card.updated_at }
      render json: all_cards.to_json( include: {
        categories: {only: [:category_name]},
        translations: {
            include: {
              user: {only: [:username]},
            }
          } 
        })
    end

    def show
      card = Card.find(params[:id])
      render json: card.to_json( include:{
        translations:{
          include:{
            user:{
              only: [:username]
            }
          }
        }
      })

    end

    def create

      # get params for the new card, persist to DB
      new_card = Card.new(card_params)
      new_card.save

      # get params for the new category, check if it's in the DB already
        # If it's already in the DB, just get the ID from it
        # Otherwise, add it in and get its ID

      # Create a new 'tag' relationship between the card and the category(ies?)

      render json: new_card.to_json
    end

    def destroy
      #admin only
      card_no_longer = Card.find(params[:id])
      card_no_longer.destroy
      render json: card_no_longer.to_json
    end 

    private
      def card_params
        params.require(:card).permit(:english_phrase, :explanation)
      end
  end
end
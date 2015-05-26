module Api
  class CardsController < ApplicationController
    def index
      all_cards= Card.all()

      render json: all_cards.to_json( include: 
        {translations: 
          { include: 
            {user: 
              {only: [:username]}
            }
          } 
          } )
    end

    def show
      card = Card.find(params[:id])

      render json: card.to_json( include:
        {translations:
          {include:
            {user:
              {only: [:username]}
            }
          }
          })

    end

    def create
      new_card = Card.new

      new_card.english_phrase = params[:english_phrase]
      new_card.explanation = params[:explanation]

      new_card.save

      render json: new_card.to_json

    end


    def update
    # this route-adding a tag-- should be hit by /api/tags instead, no update for cards

  end

  def destroy
    #admin only
    card_no_longer = Card.find(params[:id])
    card_no_longer.destroy

    render json: card_no_longer.to_json
  end
  
end

end
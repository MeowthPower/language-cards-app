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
        categories: {only: [:category_name]},
        translations:{
          include:{
            user:{only: [:username]}
          }
        }
      })

    end

    def create

      # get params for the new card, persist to DB
      new_card = Card.new(card_params)
      new_card.save

# start loopin'

        categories = params[:category_name].split(",")
        puts categories

        categories.each do |cat|
          cat_fixed = cat.strip.gsub(/ /, '_').gsub(/\W/, "")
          category = Category.find_by(category_name: cat_fixed)
        

          # get params for the new category, check if it's in the DB already
          if category
            # If it's already in the DB, just get the ID from it
            cat_id = category.id
            puts 'shiny cat found yo'
          else
            # Otherwise, add it in and get its ID
            new_category = Category.new(category_name: cat_fixed)

            new_category.save
            cat_id = new_category.id

            puts 'shiny cat birthd yo'
          end
          puts "shiny cat id is #{cat_id} yo"
          # Create a new 'tag' relationship between the card and the category(ies?)
          new_tag = Tag.new(card_id: new_card.id, category_id: cat_id)

          new_tag.save
          
          puts new_tag.card.english_phrase
          puts new_tag.category.category_name

        end
# end loopin' YO

      render json: new_card.to_json
    end


    def update
      # THIS METHOD DOES NOT UPDATE A CARD'S ROW/DATA/ATTRIBUTES IN THE DATABASE.

      # creating a new translation with the data the user submitted and linking it to the user_id and card_id
      new_translation = Translation.new({translation: params[:translation], language: params[:language], phonetic: params[:phonetic], meaning: params[:meaning], user_id: params[:user_id], card_id: params[:card_id]})
      new_translation.save

      # Returning the card model, along with the updated translation included in the thing
      card = Card.find(params[:card_id])
      render json: card.to_json( include:{
        categories: {only: [:category_name]},
        translations:{
          include:{
            user:{only: [:username]}
          }
        }
      })

    end


    def destroy
      #admin only
      card_no_longer = Card.find(params[:id])
      card_no_longer.destroy
      render json: card_no_longer.to_json
    end 

    private
      def card_params
        params.require(:card).permit(:english_phrase, :explanation, :category_name, :translation, :language, :phonetic, :meaning, :user_id, :card_id)
      end

  end
end
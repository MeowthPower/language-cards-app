module Api
  class TranslationsController < ApplicationController
    def index
      all_user_translations = Card.joins(:translations).where(translations: {user_id: current_user[:id]})

      render json: all_user_translations.to_json(
          {include:
            {translations:
              {include:
                {user:
                  {only: [:username]}
                }
              }
            }
        })  
    end

    def create
      new_translation = Translation.new

      new_translation.translation = params[:translation]
      new_translation.language = params[:language]
      new_translation.phonetic = params[:phonetic]
      new_translation.meaning = params[:meaning]
      new_translation.user_id = current_user[:id]
      new_translation.card_id = params[:card_id]

      new_translation.save
      render json: new_translation.to_json
    end

    def update
      changed_translation = Translation.find(params[:id])

      changed_translation.update(
        translation: params[:translation],
        language: params[:language],
        phonetic: params[:phonetic],
        meaning: params[:meaning]
        )

      render json: changed_translation.to_json 
    end

    def destroy
      #admin only
      dropped_translation = Translation.find(params[:id])
      dropped_translation.destroy
      render json: dropped_translation.to_json
    end
    
  end
end
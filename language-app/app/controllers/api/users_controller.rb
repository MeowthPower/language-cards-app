module Api
  class UsersController < ApplicationController

    def show
      user = current_user
      render json: user
    end

  end
end
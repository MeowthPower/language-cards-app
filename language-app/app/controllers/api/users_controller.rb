module Api
  class UsersController < ApplicationController
    def create
      user = User.new(user_params)
      user.save
    end

    def show
      user = current_user
      render json: user
    end

    private
      def user_params
        params.require(:user).permit(:username, :password, :admin)
      end
  end
end
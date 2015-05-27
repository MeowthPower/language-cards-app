class WelcomeController < ApplicationController
  def index
    if current_user
      render :logged_index
    else
      render :index
    end
  end
end
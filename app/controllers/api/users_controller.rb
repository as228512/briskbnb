class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    debugger
    @user = User.find(params[:id])

    if @user
      debugger
      @user.update(user_params)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :e_mail, :image, :password)
  end
end

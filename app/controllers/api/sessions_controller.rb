class Api::SessionsController < ApplicationController
    def create
       @user = User.find_by_credentials(
           params[:user][:email],
           params[:user][:password]
       ) 

       if @user 
        login(@user)
        render :show
       else
        render json: ["Username or Password was invaild"], status: 422
       end
    end

    def destroy
        @user = current_user
        if @user 
            logout
            render :show
        else
            render json: ["No user is login"], status: 404
        end
    end
end

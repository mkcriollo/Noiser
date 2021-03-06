class Api::CommentsController < ApplicationController
    def index
        if params[:user_id]
            @comments = User.find(params[:user_id]).comments
        elsif params[:song_id]
            @comments = Song.find(params[:song_id]).comments
        end
        render :index        
    end

    def show
        @comment = Comment.find(params[:id])
        @new_comment = @comment.child_comments.new
    end

    def create
        @comment = Comment.new(comment_params)
        
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = current_user.comments.find(params[:id])

        if @comment
            @comment.destroy
        end
    end

    private 

    def comment_params
        params.require(:comment).permit(:author_id, :song_id, :body)
    end
end


class Api::SongsController < ApplicationController
    def index
        if(params.has_key?(:user_id))
            @songs = Song.where(artist_id: params[:user_id])
        else 
            @songs = Song.all
        end
        render :index
    end

    def create
        @song = Song.new(song_params)
 
        if @song.save
            render :show
        else 
            render json: @song.errors.full_messages, status: 422
        end
    end

    def show
        @song = Song.find(params[:id])
        render :show
    end

    def destroy 
        @song = current_user.songs.find(params[:id])
        
        if @song
            @song.destroy
        end
    end

    def update
        @song = Song.find(params[:id])

        if @song.artist_id === current_user.id 
            if @song.update(song_params)
                render :show
            end
        end
    end

    private 

    def song_params
        params.require(:song).permit(:title,:genre,:description,:artist_id,:photo,:song)
    end
end

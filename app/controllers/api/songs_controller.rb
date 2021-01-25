class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
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
        @song = current_user.id.songs.find(params[:id])

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
        params.require(:song).permit(:title,:genre,:description,:artist_id)
    end
end

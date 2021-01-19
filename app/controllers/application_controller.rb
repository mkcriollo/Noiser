class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    #celll
    helper_method :current_user, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= Use.find_by(session_token: session_token[:session_token])
    end

    def ensure_user_login 
        render json: {base: ["user not login"]}, status: 404 unless current_user
    end

    def login(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user
    end
end

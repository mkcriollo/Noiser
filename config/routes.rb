Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    
    resources :users, only: [:create, :show, :index, :update] do 
      resources :songs, only: [:index]
      resources :comments, only: [:index]
    end
    
    resources :songs, only: [:create, :destroy, :show, :index, :update] do
      resources :comments, only: [:index]
    end

    resources :comments, only: [:create, :destroy, :show]

    resource :session, only: [:create, :destroy, :show]
  end
  
  root "static_pages#root"
end

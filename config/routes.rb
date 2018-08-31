Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :update, :destroy, :show]

    resources :homes, only: [:create, :show, :index] do
      resources :bookings, only: [:create]
      resources :reviews, only: [:create]
    end

    resources :bookings, only: [:index, :update, :destroy]
    resources :reviews, only: [:index, :update, :destroy]

    resource :session, only: [:create, :destroy, :show]
  end


  root 'static_pages#root'
end

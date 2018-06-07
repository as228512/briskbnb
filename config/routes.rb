Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy]
    resources :homes, only: [:create, :show, :index] do
      resources :bookings, only: [:create]
    end
    resources :bookings, only: [:index, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end


  root 'static_pages#root'
end

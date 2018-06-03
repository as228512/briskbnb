Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :homes, only: [:create, :show, :index]
    resources :users, only: [:create, :update, :destroy]
    resources :bookings, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end


  root 'static_pages#root'
end

Rails.application.routes.draw do
   root 'pages#index'
   resources :traige, only: [:index]
end
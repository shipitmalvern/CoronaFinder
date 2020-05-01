Rails.application.routes.draw do
   root 'pages#index'
   resources :traige, only: [:index]

   get '*page', to: 'pages#index', constraints: ->(req) do
      !req.xhr? && req.format.html?
   end

end
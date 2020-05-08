Rails.application.routes.draw do
   root 'pages#index'
   resources :traige, only: [:index]

    namespace :v1, defaults: { format: 'json'} do
       resources :demographics_form, only: [:create]
    end

   get '*page', to: 'pages#index', constraints: ->(req) do
      !req.xhr? && req.format.html?
   end
end

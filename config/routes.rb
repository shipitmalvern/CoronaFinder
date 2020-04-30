Rails.application.routes.draw do
  
   # namespace :v1, defaults: { format: 'json'} do
   #    get 'traige', to: 'traige#index'
   # end

   get '*page', to: 'pages#index', constraints: ->(req) do
      !req.xhr? && req.format.html?
   end
   root 'pages#index'
end
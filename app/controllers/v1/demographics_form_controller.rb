require 'faraday'

class V1::DemographicsFormController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        res = Faraday.post('https://api.infermedica.com/covid19/diagnosis') do |req|
            req.headers['Content-Type'] = 'application/json'
            req.headers['App-Id'] = 'eb79962e'
            req.headers['App-Key'] = '2de88eb85d8e113ff6e8bc340fa9cc14'
            req.body = {sex: params[:gender], age: params[:age].to_i, evidence: []}.to_json
        end
        
        render json: res.body
    end
    def index
        #make api call to news api and get result back 
        #create evidence array from params
        response = Faraday.get('https://newsapi.org/v2/top-headlines?country=us&q=COVID&from=2020-04-27&sortBy=publishedAt&apiKey=e5aff38f78b34a1b80954fa5967d690c&limit=5') do |req|
            req.headers['Content-Type'] = 'application/json'
        end
        render json: response.body
    end

end

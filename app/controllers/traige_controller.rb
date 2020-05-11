class TraigeController < ApplicationController

    protect_from_forgery with: :null_session
    def create
        #Make api call to symptoms api and get questions back based on response
        question_response= params
        question_response['age']= question_response['age'].to_f
        
        response = Faraday.post('https://api.infermedica.com/covid19/triage') do |req|
            req.headers['Content-Type'] = 'application/json'
            req.headers['App-Id'] = 'eb79962e'
            req.headers['App-Key'] = '2de88eb85d8e113ff6e8bc340fa9cc14'
            req.body = question_response.to_json
        end
        render json: response.body
    end
end
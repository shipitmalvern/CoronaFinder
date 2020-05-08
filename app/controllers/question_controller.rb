class QuestionController < ApplicationController
    def index
        #Make api call to symptoms api and get questions back based on response
        mock_triage_response= {
            "sex": "male",
            "age": 32,
            "evidence": [ ]
          }
          
        response = Faraday.post('https://api.infermedica.com/covid19/diagnosis') do |req|
            req.headers['Content-Type'] = 'application/json'
            req.headers['App-Id'] = 'eb79962e'
            req.headers['App-Key'] = '2de88eb85d8e113ff6e8bc340fa9cc14'
            req.body = mock_triage_response.to_json
        end
        render json: response.body
    end
end

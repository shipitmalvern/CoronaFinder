class TraigeController < ApplicationController

        def index
            #make api call to traige and get result back 
            #create evidence array from params
            evidence = params[:evidence]
            response = Faraday.post('https://api.infermedica.com/covid19/traige') do |req|
                req.headers['Content-Type'] = 'application/json'
                req.headers['App-Id'] = 'eb79962e'
                req.headers['App-Key'] = '2de88eb85d8e113ff6e8bc340fa9cc14'
                req.body = {sex: params[:gender], age: params[:age].to_i, evidence: [evidence]}.to_json
            end
    
            render json: res.body
        end
end
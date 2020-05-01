require 'pry'

class TraigeController < ApplicationController

        def index
            #make api call to traige and get result back 
            #create evidence array from params
            
            mock_triage_response= {
                "sex": "male",
                "age": 32,
                "evidence": [
                           {"id": "p_16", "choice_id": "absent"},
                           {"id": "p_17", "choice_id": "present"},
                           {"id": "p_18", "choice_id": "absent"},
                           {"id": "p_19", "choice_id": "absent"},
                           {"id": "p_20", "choice_id": "absent"},
                           {"id": "p_21", "choice_id": "absent"},
                           {"id": "p_22", "choice_id": "absent"},
                           {"id": "s_0", "choice_id": "absent"},
                           {"id": "s_1", "choice_id": "absent"},
                           {"id": "s_2", "choice_id": "absent"},
                           {"id": "s_15", "choice_id": "present"},
                           {"id": "s_16", "choice_id": "present"},
                           {"id": "s_17", "choice_id": "absent"},
                           {"id": "s_18", "choice_id": "absent"},
                           {"id": "s_19", "choice_id": "absent"},
                           {"id": "s_20", "choice_id": "absent"},
                           {"id": "s_21", "choice_id": "absent"},
                           {"id": "p_12", "choice_id": "present"}
                    ]
              }
            
            response = Faraday.post('https://api.infermedica.com/covid19/traige') do |req|
                req.headers['Content-Type'] = 'application/json'
                req.headers['App-Id'] = 'eb79962e'
                req.headers['App-Key'] = '2de88eb85d8e113ff6e8bc340fa9cc14'
                req.body = mock_triage_response.to_json
            end
            binding.pry
            render json: res.body
        end
end
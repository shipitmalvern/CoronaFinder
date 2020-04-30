
class V1::DemographicsFormController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        render json: {
            "description": "This works"
        }
    end

end

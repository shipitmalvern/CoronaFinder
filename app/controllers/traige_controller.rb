class V1::TraigeController < ApplicationController

        def index
            render json: {
                "description": "Your symptoms currently do not suggest that you have COVID-19. However, according to the WHO and CDC guidelines, it is strongly recommended that you keep yourself separated from others for the next 14 days.",
                "label": "Quarantine",
                "serious": [
                    {
                        "common_name": "Living or caring for COVID-19 suspected person",
                        "id": "p_12",
                        "is_emergency": false,
                        "name": "Living or caring for COVID-19 suspected person"
                    }
                ],
                "triage_level": "quarantine"
            }
        end
end
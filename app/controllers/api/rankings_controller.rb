module Api
  class RankingsController < ApplicationController
    respond_to :json

    def index
      @rankins = [ { rodovia: "BR-116", densidade: 100 }, { rodovia: "BR-010", densidade: 120 } ]
      render :text => @rankins.to_json
    end

  end
end

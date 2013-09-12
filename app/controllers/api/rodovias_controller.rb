class Api::RodoviasController < ApplicationController
  respond_to :json
  before_filter :populate_rodovias, on: [ 'index', 'show' ]

  def index
    render :text => @rodovias.to_json
  end

  def show
    render :text => @rodovias[params[:id].to_i - 1].to_json
  end

  private

  def populate_rodovias
    @rodovias = [ { sigla: 'BR116' }, { sigla: 'BR101' } ]
  end
end

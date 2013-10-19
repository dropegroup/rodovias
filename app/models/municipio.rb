class Municipio < ActiveRecord::Base
  set_table_name "municipio"
  set_primary_key "tmucodigo"
  attr_accessible :latitude, :longitude
end

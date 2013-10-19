task :latitude_longitude => :environment do
  Municipio.where("latitude is null").each do |municipio|
    p municipio
    p response = %x[ curl 'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&region=BR&address=#{municipio.tmudenominacao.tr(' ', '+')}+-+#{municipio.tmuuf}' ]
    response = JSON.parse(response)
    location = response["results"].first["geometry"]["location"]
    municipio.update_attributes!(:latitude => location["lat"], :longitude => location["lng"])
    p municipio
    puts "\n"
  end
end

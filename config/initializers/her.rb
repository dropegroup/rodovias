Her::API.setup url: "http://dprf-server-dropegroup.aws.af.cm" do |c|
  c.use Faraday::Request::UrlEncoded
  c.use Her::Middleware::DefaultParseJSON
  c.use Faraday::Adapter::NetHttp
end

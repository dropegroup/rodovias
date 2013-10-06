class Services::Rodovia
  include Her::Model
  primary_key :group

  custom_get :ranking
end

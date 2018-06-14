json.extract! home, :id, :description, :lat, :long, :title, :price, :user_id, :home_url
json.image_url home.image.url
json.image_url asset_path(home.image.url)

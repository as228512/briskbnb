json.extract! user, :id, :e_mail
json.image_url user.image.url
json.image_url asset_path(user.image.url)

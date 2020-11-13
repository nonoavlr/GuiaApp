db = db.getSiblingDB('app')
db.new_collection.insert({ some_key: "some_value" })
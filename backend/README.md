#Backend Documentation

##User-Related Actions
HTTP Method | Resource URL | Description | Requirements
--- | --- | ---
GET |	/api/users/<id>  |	Returns a user. Can only see your own user profile right now | Send "x-access-token" in packet header, with the user access token
POST| 	/api/users |	Register a new user account, and returns an access token (logs user in) | Requires a JSON body with name, email and password as keys
POST| /api/users/login | Logs a user in and return an access token | Requires a JSON body with email and password.
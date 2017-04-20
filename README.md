# Authentication Process outline 📝

Essentially,
1.	Client → User signs up with email & password
2.	Server → Look at email & password, authorize (cookies or token?)
3.	Client → With cookies/token, client can make authenticated requests w/o email and pw being required every time
5.	Client → Send request to server to view a protected resource. *shows cookie/token*
6.	Server → I see your ID that authorizes you. *sends protected resource*


## Todos 📌

### Server-side
* setup express server w/ middleware
* create mongoose model, connect to mongodb
* create signup route & controller
* encrypt & encrypt passwords

### Client-side
* scaffold react App
* redux wiring
* sign up form
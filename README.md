# Authentication Process outline 📝

Essentially,
1.	Client → User signs up with email & password
2.	Server → Look at email & password, authorize (cookies or token?)
3.	Client → With cookies/token, client can make authenticated requests w/o email and pw being required every time
5.	Client → Send request to server to view a protected resource. *shows cookie/token*
6.	Server → I see your ID that authorizes you. *sends protected resource*


## Todos 📌

### Server-side
* ~~setup express server w/ middleware~~
* ~~create mongoose model, connect to mongodb~~
* ~~create signup route & controller~~
* ~~encrypt passwords (bcrypt)~~
* ~~distribute JSON web tokens~~
* ~~create Passport JWT strategy (+ Local strategy)~~
* ~~create post sigin route (req auth)~~

### Client-side
* scaffold App component
* scaffold react-router routes
* create header component with login/sign out, sign up features
* create routes for:
  1. home page "/"
  2. sign up "/signup"
  3. sign in "/signin"
  4. protected resource "/protected"
* redux wiring actions & state
* sign up form (redux-form v6)
* on user signup
  * confirm password (validation)
  * send request to server
    * save token, redirect user, update auth state
    * if not successful display error to user

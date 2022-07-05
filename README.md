# Project3: Pet Adoption Application

## Client

### Pages

- Home - / - Display latest pets and posts
- Register - /register - Allow visitor to create account with name, email, password and profile picture. ✅
- Log In - /log-in - Allows existing user to log-in. ✅
- Profile Search - /profile/search - Search for users. ✅
- Profile Edit - /profile/edit - Allows authenticated user to edit their profile. ✅
- Profile - /profile/:id - Visualize users' profile + Pet Bookmarks
  ​
- Pet Detail - /pet/:id/detail - Display details on a single pet + comments/likes. ✅
- Pet Create - /pet/create - Allow user to add single pet to application. ✅
- Pet Edit - /pet/:id/edit - Allow user to update single pet. ✅
- Pet Delete - /pet/:id/delete - Allow user to delete single pet. ✅
- Pet Search - /pet/search - Search for pets. ✅
<!-- page needed for pet bookmark, or just component shown in Profile? -->
- Pet Bookmark - /pet/bookmark -
  ​
- Single Post - /post/:id - Displays single post.
- Post Create - /post/create - Allow user to add single post.
- Post Edit - /post/:id/edit - Allow user to update single post.
  ​
- Adoption Center - /center/:id - Displays adoption center information, incl. listed pets and posts
  ​
- Message Thread List - /message/list - Displays message thread list
- Message Thread Detail - /message/:id - Displays message thread <!-- with edit and delete button for message creator -->
- Message Thread Create - /message/create - Displays message creation form
  ​

### Services

- listPets - issue GET to '/pet/list' list pets ✅ <!-- centers --> ({pets[], centers[], ? profiles[]})?
- loadPet - issue a GET to '/pet/:id' Load details on a single pet. ✅
- editPet - issues PATCH to '/pet/:id' - Edit single pet. ✅
- deletePet - issues DELETE to '/pet:/id' Delete single pet. ✅
- createPet - issues POST to '/pet' Creates single pet. ✅
- petSearch - issues GET to '/pet/search' - Allows user to search for pets ✅ (type, area(google api), sub-filters maybe related to the pet/type).
  ​
  <!-- display posts + bookmarked pets of user on user's profile -->
  ​
- loadPost - issue a GET to '/post/:id' Load details on a single post.
- editPost - issues PATCH to '/post/:id' - Edit single post.
- deletePost - issues DELETE to '/post:/id' Delete single post.
- createPost - issues POST to '/post/' Creates single post.
  ​
- registerUser - issues POST to '/authentication/sign-up' - Registers new user.
- logInUser - issues POST to '/authentication/sign-in' - Authenticates existing user.
- signOutUser - issues POST to '/authentication/sign-out' - Signs out user.
- loadUserInformation - issues GET to '/authentication/me' - Loads information about authenticated user.
  ​
- searchProfile - issues GET to '/profile/search' - Allows user to search for other user profiles.
- loadProfile - issues GET to '/profile/:id' - Loads single users profile.
- editProfile - issues PATCH to '/profile' - Edit authenticated users profile.
- deleteProfile - issues DELETE to '/profile/:id' - Delete authenticated users profile.
  ​
- bookmarkList - issues GET to '/pet/bookmarked' - List all pets an authenticated user has bookmarked.
- bookmarkAdd - issues POST to '/pet/:id/bookmark' - Set bookmark for this pet on this users profile.
- bookmarkRemove - issues DELETE to '/pet/:id/bookmark' - Unset bookmark for this pet on this users profile.
- messageThreadList - issues GET to '/message/list' - List all message threads of an authenticated user.
- messageThreadLoad - issues GET to '/message/:id' - List all messages between authenticated user and user of id param.
- messageSend - issues POST to '/message/:id' - Send message between authenticated user and user of id param.
  ​

## Server

### Models

#### User (Ilan)

- name: String, required, trim
- email: String, required, trim, lowercase
- passwordHashAndSalt: String, required
- picture: String
- description: String, max: 500
- Bookmark
- type: String, enum ['private', 'center'] <!-- 'center' displays extra component in profile with center information -->
  ​

#### Pet (Julia)

- name: String, required​
- animal: String, [ 'dog', 'cat', 'rabbit', 'bird'], required
- breed: String, trim, default
- age: Number, min: 0
- location: { type: String, default: 'Point', coordinates: [ Number ] } <!-- or with latlng -->
- listed: Boolean, required
- adopted: Boolean, required (adopted, upForAdoption)
- owner: ObjectId, ref: 'User', required
- description: String, maxLength: 5000, trim
- picture: String
- timestamp
  ​

#### Post (Nina)​

- title: String, required
- description: String, maxLength: 5000, trim
- type: String, [ 'petForAdoption', 'lookingForPet' ], required
- owner: ObjectId, ref: 'User', required ​

### Message

- content: String, required, minlength: 1, maxlength: 5000, trim
- sender: ObjectId, ref: 'User', required
- receiver: ObjectId, ref: 'User', required
- createdAt: Date <!-- setting timestamps option on schema to true -->

### Request Handlers

- GET - '/pet/list' - list pets.
- GET - '/pet/:id' - Load details on a single pet.
- PATCH - '/pet/:id' - Edit single pet.
- DELETE - '/pet:/id' Delete single pet.
- POST - '/pet/create' Creates single pet.
- GET - '/pet/search' - Allows user to search for pets. <!-- type, area(google api), sub-filters maybe related to the pet/type -->
  ​
- GET - '/post/:id' - Load details on a single post.
- PATCH - '/post/:id' - Edit single post.
- DELETE - '/post:/id' - Delete single post.
- POST - '/post/' - Creates single post.
  ​
- POST - '/authentication/sign-up' - Registers new user.
- POST - '/authentication/sign-in' - Authenticates existing user.
- POST - '/authentication/sign-out' - Signs out user.
- GET - '/authentication/me' - Loads information about authenticated user.
  ​
- GET - '/profile/search' - Allows user to search for other user profiles.
- GET - '/profile/:id' - Loads single users profile.
- PATCH - '/profile' - Edit authenticated users profile.
- DELETE - '/profile/:id' - Delete authenticated users profile.
  ​
- GET - '/pet/bookmarked' - List all pets an authenticated user has bookmarked.
- POST - '/pet/:id/bookmark' - Set bookmark for this pet on this users profile.
- DELETE - '/pet/:id/bookmark' - Unset bookmark for this pet on this users profile.
  ​
- GET - '/message/list' - List all message threads of an authenticated user.
- GET - '/message/:id' - List all messages between authenticated user and user of id param.
- messageSend - issues POST to '/message/:id' - Send message between authenticated user and user of id param.
  ​

## Wishlist

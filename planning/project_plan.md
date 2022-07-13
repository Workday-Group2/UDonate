# Project Plan

Pod Members: Ada Pici, Nasradin Kewden, Estaban Ayala


## Problem Statement and Description

Insert the latest summary of your problem statement and app description.

## User Roles and Personas

Include the most up-to-date user roles and personas.
- "receiver": a user who is seeking food to pick up 
- "donater": a user who is providing food items
- “Donater+receiver” - having the option to play both roles

Donater: 
- “Carmen is a 25-year-old grad student living in Columbus, Ohio. She notices that every week she ends up throwing out and wasting a lot of her groceries since she cannot finish a lot of it herself. Carmen would like to help fight food waste by finding someone who could use some extra groceries.”

- “Mary and Jenny are roomates living in Los Angeles, California. They both do grocery shopping separately. At the end of the week, Mary and Jenny realize a lot of their groceries are about to expire since they overbought groceries this week. They also cannot finish the food on time. They both hate wasting food and wish they would give it to someone who needs it”

Receiver:
- “Alicia has multiple kids and she needs help with providing food for her family. She usually surfs the internet on her computer to find websites that can help her find suitable food donators. “

- “Joe a student from Texas Tech is currently short on food due to money problems. He goes to the school’s food pantry but the lines are too long and he doesn’t have enough time to wait when he has classes to get to. (Someone in need but still has access to technology)”


## User Stories

List the current user stories you will implement.

1. **As a [user role], I want to [what], so that [why]**
2. As a user I would like to communicate with other users who are donating
3. As a receiver I would like to request items.
4. As a receiver I want to see items users are donating
5. As a donator/receiver I would like a confirmation email 
6. As a receiver I want to be able to know where the donater is located
7. As a receiver I want to be able to filter items by category
8. As a receiver I would like to see a donaters profile
9. As a receiver/donater I would like to see my past activity
10. As a donater I would like to upload images of the products I want to donate
11. As a receiver I want to have a detailed description of the product
12. As a user I want to be able to reset my password when I forget my password
13. As a user I would like to be leave a rating and comment reviews on my experience with another user.
14. As a user I would like to see my account details 
15. As a user I would like to have a bio and a profile picture
16. As a receiver I would like to choose dietary preferences 
17.As a donater I would like to add pick up times to my posts


## Pages/Screens
[CapStone WireFrame.pdf](https://github.com/Workday-Group2/Capstone-Project/files/9103443/CapStone.WireFrame.pdf)



List all the pages and screens in the app. Include wireframes for at least 3 of them.
![CapStone WireFrame-1](https://user-images.githubusercontent.com/99931474/178371363-0c0036ca-6a58-4b99-96da-5dc189239e06.jpg)
![CapStone WireFrame-2](https://user-images.githubusercontent.com/99931474/178371376-e29c6898-2d32-452e-a1e9-af9c4b03d8e3.jpg)

## Data Model

Describe your app's data model using diagrams or tables

#### Objects our Data Model is going to have:
1. Users
2. Donation Post
3. Rating
4. Booking
5. Comments
6. Message

### Users Table:
| Property  |Type   | Description  | 
|---|---|---|
|  id | string  |users username   |
|  password |  string | users password  |
|  first_name |  string | users firstname  |
| last_name  | string  | users last name  | 
| email  | string  | users email  |
| created_at  |  dateTime |  date when donation is created |
|  updated_at |dateTime   | date when donation is last updated  | 
| image_url  | file  | profile picture for user  | 
| zip_code  | integer  | user zip code  | 

### Rating Table:
|Property   |Type   |Description|
|---|---|---|
|rating   |Integer   |Rating for the booking/user   | 
|booking_id   |Integer   |Unique id from the users booking   | 
|User_id   |Integer   |Unique id from user   | 
|created_at   | dateTime  |Date when rating is created   | 

### Donation Table:
|Property   |Type   |Description   | 
|---|---|---|
|id   |Integer   |Unique id for the donation   |
|name   |String   |Name of the donation   | 
|catergory   |String   |Category of the donation   | 
|quantity   |Integer   |Quantity of the donation   |
|image_url   |File   |Image for user donation   |
|user_id   |Integer   |Unique id from user   |
|created_at   |DateTime   |Date when donation is created   |


### Bookings Table:
|  Property |  Type | Description  | 
|---|---|---|
| Booking_id  | integer  | unique id for the booking  |
|  post_id | integer  | unique id from the users donation  |
|  created_at | datetime  | date when booking was created  | 

### Comment Table:
|Property   |Type   |Description   |
|---|---|---|
|Likes   |Integer   |Number of Likes a comment has   |
|user_id   |integer|Unique id from user   |
|comment_text   |string|Text from the comment   |
|image_url   |string   |Image upload for the comment   |
|created_at   |timestamp   |Time the comment was uploaded   |
|Updated_at (?)   |timestamp   |Time comment was updated   |

### Message Table:
| Property | Type | Description  | 
|---|---|---|
| recipient_id | Integer | Unique id from recipient | 
| sender_id | integer | Unique id from sender | 
|message_text| string | message text | 
| created_at | timestamp | Time Message was sent | 
| Image_url | string | image upload for messaging |


## Endpoints

List the API endpoints you will need to implement.

***Don't forget to set up your Issues, Milestones, and Project Board!***

### user
|CRUD   |HTTP verb   |Description   |User Stories   |
|---|---|---|---|
|Create   |POST   |Create user   |   | 
|Login   |POST   |Login User   |   | 
|Read   |GET   |Fetch existing user   |   | 

### Donation
|CRUD   |HTTP verb   |Description   |User Stories   |
|---|---|---|---|
|Create   |POST   |Create donation   |   | 
|Read   |GET   |List all donation   |   | 
|Read   |GET   |List a single donation   |   |
|Update   |PATCH   |Update a single donation   |   |

### Ratings:
| CRUD  |  HTTP verb |Description   | User Stories  | 
|---|---|---|---|
| Create  |  Post | Add a rating to a user  |   | 
|  Read | GET  | Fetch the ratings of the user  |   |

### Bookings:
| CRUD  |  HTTP verb |Description   | User Stories  | 
|---|---|---|---|
| Read  | Get  |List all bookings created by authenticated user   |   | 
|  Create | Post  | Create a new booking for a donation  |   |

### comment
|CRUD   |HTTP verb   |Description   |User Stories   |
|---|---|---|---|
|Create   |POST   |Create a new comment   |   | 
|update   |POST   |Add likes to a users comment  |   | 
|Read   |GET   |Fetch existing likes to a comment   |   |


### Message:
| CRUD  | HTTP Verb  | Description  | User Stories  | 
|---|---|---|---|
| Create  |     POST | Create a new message  |   |
|READ   |GET   |Fetch previous messages   |   |










# Project Plan

Pod Members: Ada Pici, Nasradin Kewden, Estaban Ayala


## Problem Statement and Description

We want to break the barrier by giving low income college students or adults the ability to receive food donations when they don't have the ability to afford them. We are also fighting food waste by giving the option for others to donate quality food items that might've gone to waste otherwise.

## User Roles and Personas

Include the most up-to-date user roles and personas.
- "receiver": The user is needs assistance with food donation.
- "donater": The user who is posting quality food for others.
- “Donater+receiver” - having the option to play both roles.

Donater: 
- “Carmen is a 25-year-old grad student living in Columbus, Ohio. She notices that every week she ends up throwing out and wasting a lot of her groceries since she cannot finish a lot of it herself. Carmen would like to help fight food waste by finding someone who could use some extra groceries.”

- “Mary and Jenny are roomates living in Los Angeles, California. They both do grocery shopping separately. At the end of the week, Mary and Jenny realize a lot of their groceries are about to expire since they overbought groceries this week. They also cannot finish the food on time. They both dislike wasting food and wish they would give it to someone who needs it”

Receiver:
- “Joe, a student from Texas Tech is currently short on food due to money problems. He doesn't want to go to class on an empty stomach so he can have enough energy to be productive"(Someone in need but still has access to technology).

- “Alicia has multiple kids and she needs help with providing food for her family. She usually surfs the internet on her computer to find websites that can help her find suitable food donators".


## User Stories

List the current user stories you will implement.

**As a [user role], I want to [what], so that [why]**

1. As a receiver I would like to book food items posted for donation.
2. As a receiver I want to have the option to browse all the donation.
3. As a donator/receiver I would like a confirmation email for the booked donation. 
4. As a receiver I want to be able to filter food items by category.
5. As a user I would like to see a other users profile information.
6. As a receiver/donater I would like to see my past activity.
7. As a donater I would like to upload images of the products I want to donate
8. As a receiver I want to have a detailed description of the food item posted for donation.
9. As a user I want to have the option to reset my password if I forget it.
10. As a user I would like to be leave a rating on my experience with another user.
11. As a user I would like to see my account details(bio, profile, etc).
12. As a receiver I would like to choose dietary preferences.
13. As a donater I would like to add pick up times to my posts.
14. As a receiver, I would like the location posted for the donation.



## Pages/Screens

List all the pages and screens in the app. Include wireframes for at least 3 of them.

Figma: https://www.figma.com/file/qaT71vL6ZI9cZ07a5TCjIo/Capstone-Project?node-id=0%3A1 

Sketch:
![CapStone WireFrame-1 2](https://user-images.githubusercontent.com/99931474/178790528-c7c8c7ef-d7d2-4118-857d-6cad37a92b57.jpg)
![CapStone WireFrame-2 2](https://user-images.githubusercontent.com/99931474/178790523-264cdaad-af96-4a2e-907c-45c8c077eb1d.jpg)

## Data Model

Describe your app's data model using diagrams or tables

#### Objects our Data Model is going to have:
1. Users
2. Donation Post
3. Rating
4. Booking
5. Category
6. Location

### Stretch Features
8. Comments?
9. Message?

### Users Table:
| Property  |Type   | Description  | 
|---|---|---|
|  id | integer  |serial primary key|
|username|string|users username|
|  password |  string | users password  |
|  first_name |  string | users firstname  |
| last_name  | string  | users last name  | 
| email  | string  | users email  |
| created_at  |  dateTime |  date when donation is created |
|  updated_at |dateTime   | date when donation is last updated  | 
| image_url  | file  | profile picture for user  | 
| location_id  | integer  | unique id for the users location   | 

### Rating Table:
|Property   |Type   |Description|
|---|---|---|
|  id | integer  |serial primary key|
|rating   |Integer   |Rating for the booking/user   | 
|booking_id   |Integer   |Unique id from the users booking   | 
|User_id   |Integer   |Unique id from user   | 
|created_at   | dateTime  |Date when rating is created   | 

### Donation Table:
|Property   |Type   |Description   | 
|---|---|---|
|id   |Integer   |serial primary key|
|name   |String   |Name of the donation   | 
|catergory   |String   |Category of the donation   | 
|quantity   |Integer   |Quantity of the donation   |
|image_url   |File   |Image for user donation   |
|user_id   |Integer   |Unique id from user   |
|created_at   |DateTime   |Date when donation is created |




### Bookings Table:
|  Property |  Type | Description  | 
|---|---|---|
| id  | integer  | serial primary key  |
|  post_id | integer  | unique id from the users donation  |
|  created_at | datetime  | date when booking was created  | 

### Catergory:
|Property   |Type   |Description   | 
|---|---|---|
|id |integer|serial primary key|
|name|string|name of the food catergory| 



### Location:
|Property   |Type   |Description   |
|---|---|---|
|id|integer|serial primary key|
|location_name   |string|the name of the location  |


### Stretch Feature - Comment Table:
|Property   |Type   |Description   |
|---|---|---|
|Likes   |Integer   |Number of Likes a comment has   |
|user_id   |integer|Unique id from user   |
|comment_text   |string|Text from the comment   |
|image_url   |string   |Image upload for the comment   |
|created_at   |timestamp   |Time the comment was uploaded   |
|Updated_at (?)   |timestamp   |Time comment was updated   |

### Stretch Feature - Message Table:
| Property | Type | Description  | 
|---|---|---|
| recipient_id | Integer | Unique id from recipient | 
| sender_id | integer | Unique id from sender | 
|message_text| string | message text | 
| created_at | timestamp | Time Message was sent | 
| Image_url | string | image upload for messaging |
 

## Endpoints

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

### Categories:
| CRUD  | HTTP Verb  | Description  | User Stories  | 
|---|---|---|---|
|READ   |GET   |Fetch categories   |   |
|update   |POST   |update post categories  |   | 


### Location:
| CRUD  | HTTP Verb  | Description  | User Stories  | 
|---|---|---|---|
|update   |POST   |update post location  |   | 
|READ   |GET   |Fetch Location   |   |


### Stretch Feature - Comment:
|CRUD   |HTTP verb   |Description   |User Stories   |
|---|---|---|---|
|Create   |POST   |Create a new comment   |   | 
|update   |POST   |Add likes to a users comment  |   | 
|Read   |GET   |Fetch existing likes to a comment   |   |


### Stretch Feature - Message:
| CRUD  | HTTP Verb  | Description  | User Stories  | 
|---|---|---|---|
| Create  |     POST | Create a new message  |   |
|READ   |GET   |Fetch previous messages   |   |


This is a book management app created by me . 
The web app has been made with mern stack and utitilzes tailwind for css .
A book management app that consist of an admin dashboard where you can edit ,add or delete books and view your collection . The front end consist of your book collection with search and sort filters .
TO run the app ,
clone the repo and install the required dependencies  in the root folder and in the front end folder .
Create a .env file and  create these three strings
MONGO_URI = ....
VITE NODE_ENV=DEVELOPMENT || 
JWT_SECRET = "THIS IS A... " 
Then , from the root folder , run the command npm run dev ( this wiil start both tht front end and backend as i have installed concurrently and combined both operations )
after that you are good to go .  
To access the admin panel , go to http://localhost:5173/admin   ( which will redirect you to login page - login if you have already signed up otherwise signup ) 
this will take you to the admin panel and here you can add ,edit or delete books . 
The books you have added are shown in the front end and you can search the books through their name,language or author . There is also a filter option which you can use to sort the books based on their price .


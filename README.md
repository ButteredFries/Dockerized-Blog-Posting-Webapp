**Blog Posting Webapp**

A RESTful blog webapp. 

The back-end was developed using Docker, Java, Dagger2, and MongoDB 4.2.3

The front-end was developed using Docker, Angular, and Nginx

Default address is Localhost and Port is 80 for the front-end, 8080 for the back-end, and 27017 for MongoDB


**Prerequisites:**

1. Install Docker Desktop https://docs.docker.com/desktop/

2. (Optional) Install MongoDB Compass https://www.mongodb.com/products/compass

3. (Optional) Install Postman https://www.postman.com/downloads/


**How to compile and run:**

**CMD Line:**

1. Compile the front-end using "docker build -t="front-end" ." inside ./Front-end/

2. Compile the back-end using "docker build -t="back-end" ." inside ./Back-end/

3. Run using "docker-compose up" in the root directory ./

4. If "docker-compose up" runs an older version of the program run "docker-compose -d --build"


**How to access front-end:**

On a browser go to localhost:80

#Description
    So called "web-news" is a project where a
    user can read what is considered all up-to-date
    news and leave a comment if they want what makes 
    it not only a news website but also a forum, where
    someone can share their opinion about some news.
    This particular project is a RESTapi for described before
    idea.

#Technologies used
    1. Main framework --> NestJS
    2. PostgreSQL + Sequialize integration
    3. JWT + argon2 for security

#How to run a project
    1. Clone the git repo
    2. open pgAdmin 4 and create a db (if you don't have pgAdmin4 install it)
    3. run npm install command
    4. create .env file in the root directory of the project
    5. fill the .env file in the following form
        # Server configuration
        PORT=your_value
        
        # Database configuration
        DB_HOST=localhost
        DB_PORT=5432
        DB_USERNAME=postgres
        DB_PASSWORD=your_value
        DB=your_value
        
        # JWT configuration
        JWT_SECRET=your_value
    6. run npm run start:dev command

#IMPORTANT
    Data inside the db should be added mannually
    or any other software for sending requests
    in the front-end of this project there is no way
    to add news or images, BUT you can implement it.
    This option was not considere by the author
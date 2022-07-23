import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto'>
            <h2>This is Blogs</h2>
            <div>
                <h4>1. Differences between Javascript and NodeJS</h4>

                <h5>JavaScript</h5>

                <p style={{ 'text-align': 'left' }}>  1. Javascript is a programming language that is used for writing scripts on the website.
                    2. Javascript can only be run in the browsers.
                    3. It is basically used on the client-side.
                    4. Javascript is capable enough to add HTML and play with the DOM.
                    5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                    7. Javascript is used in frontend development.
                    Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                    8. It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++.</p>

                <h5>NodeJS</h5>

                <p style={{ 'text-align': 'left' }}>1. NodeJS is a Javascript runtime environment.
                    2. We can run Javascript outside the browser with the help of NodeJS.
                    3. It is mostly used on the server-side.
                    4. Nodejs does not have capability to add HTML tags.
                    5. V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                    6. Nodejs is used in server-side development.
                    7. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                    8. Nodejs is written in C, C++ and Javascript.
                </p>
                <h4>2. What is the purpose of jwt and how does it work?</h4>

                <p style={{ 'text-align': 'left' }}>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a
                    server.First, some terms d'art need to be disambiguated. It's not uncommon to hear somebody refer to a REST API as
                    simply an API. Likewise, we frequently see JWTs conflated with the pattern of JWT-based authentication.
                    A JSON Web Token consists of 3 parts separated by a period.
                    1. header.
                    2. payload.
                    3. signature.
                    Due to this security issue, the auth server needs to transmit this information in a way that can be verified by the
                    client application, and this is where the concept of a “token” comes into the picture.

                    To put it simply, a token is a string that contains some information that can be verified securely. It could be a
                    random set of alphanumeric characters which point to an ID in the database, or it could be an encoded JSON that can be
                    self-verified by the client (known as JWTs).</p>

                <h4>3. Differences between sql and nosql database?</h4>

                <h5>SQL:</h5>
                <p style={{ 'text-align': 'left' }}>1. SQL databases are primarily called RDBMS or Relational Databases
                    2. Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for
                    OLAP systems.
                    3. Structured query language (SQL)
                    4. SQL databases are table based databases
                    5. SQL databases have a predefined schema
                    6. An ideal choice for the complex query intensive environment.
                    7. It was developed in the 1970s to deal with issues with flat file storage
                    8. A mix of open-source like Postgres & MySQL, and commercial like Oracle Database.
                    9. Highly Available Storage (SAN, RAID, etc.)</p>

                <h5>NoSql</h5>

                <p style={{ 'text-align': 'left' }}> 1. NoSQL databases are primarily called as Non-relational or distributed database
                    2. NoSQL database system consists of various kind of database technologies. These databases were developed in response
                    to the demands presented for the development of the modern application.
                    3. No declarative query language.
                    4. NoSQL databases can be document based, key-value pairs, graph databases.
                    5. NoSQL databases use dynamic schema for unstructured data.
                    6. It is not good fit complex queries.
                    7. Developed in the late 2000s to overcome issues and limitations of SQL databases.
                    8. Open-source
                    9. Commodity drives storage (standard
                    HDDs, JBOD)</p>

                <h4>  4. When should you use node js and when should you use mongodb?</h4>

                <h5>Node.js</h5>
                <p style={{ 'text-align': 'left' }}>Node.js is a JavaScript runtime environment for the back-end of your application. Based on Google's V8 JavaScript
                    engine, Node.js includes numerous components and features necessary for web app implementation.

                    One of the main advantages of Node.js is its scalability thanks to its event-driven asynchronous engine. Since it
                    continues working on other tasks in the queue instead of waiting for the client to respond, it can perform many more
                    operations in parallel and thus faster.
                    In addition, Node.js supports the quick installation of third party packages and modules using the npm tool, which we
                    will also use in this tutorial to install MongoDB.</p>

                <h5> MongoDB</h5>
                <p style={{ 'text-align': 'left' }}>MongoDB is an open source non-relational database that stores the data in the form of collections and documents.
                    Designed with agility and scalability in mind, MongoDB brings together the rich features of relational databases and
                    speed of key-value stores.

                    Instead of storing data in rows and columns (as relational databases do), MongoDB stores the JSON documents in the
                    form of collections with dynamic schemas. Storing all related information together makes querying faster, and since
                    MongoDB was also designed to be used asynchronously, it makes for an ideal repository for the data of Node.js
                    applications.

                    In this tutorial, we'll be installing MongoDB on your local machine, but for production purposes, you might want to
                    use the MongoDB Atlas cloud database service.</p>

            </div>
        </div>
    );
};

export default Blogs;
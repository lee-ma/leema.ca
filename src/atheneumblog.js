import React from 'react';

class AtheneumBlog extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <a href="/projects" className="back-btn"><i className="fas fa-arrow-circle-left"></i></a>
          <div className="col-11 offset-md-1">
            <h1 className="blog-title">Atheneum</h1>
            <p className="blog-subtitle">Find local teachers for anything you want to learn</p>
            <h3 className="subheader">Quick Summary</h3>
            <p className="blog-body">
              Atheneum is a website I created with the intention of helping teachers and students in the same city to connect with each other. After creating an account, a teacher could create a new listing that would allow them to advertise a short description of their teaching, a price, and their contact information. Users could then search or browse listings to find a teacher for anything that they wanted to learn.
            </p>
            <p className="blog-body">
              The frontend of this site was created with React and Redux, allowing me to easily put together the profile and listing pages. The listings were put together with a information, teacher, and comment section each created as separate React components. I was easily able to handle the data required for each of these sections using Redux to call the backend APIs and pass on the payload to the React components. This especially made handling user authentication state simple across the application.
            </p>
            <div>
              <h3 className="subheader">Front-end</h3>
              <p className="blog-body">I began the frontend with the landing page. I would consider myself less experienced when it comes to design, so as I begin out, I look a lot to other places for sources of inspiration. For Atheneum, I was heavily influenced by Airbnb, especially their old landing page with the Airbnb branding, and a search bar. It cut out everything that was unnecessary and made the page incredibly clean and easy to use. I also really loved the way they put the search button inside of the bar. I thought this would be perfect for Atheneum, which led me to create the landing page the way I did.</p>
              <img className="scrnshot" src="./assets/atheneum-pics/landing.png"/>
              <p className="blog-body">After creating the landing page, I moved onto profile and listing pages which used Redux state, as well as local state to show comment submission form based on user state. The bootstrap grid system was used to set up the layout of the pages.</p>
              <img className="scrnshot" src="./assets/atheneum-pics/profile.png"/>
              <img className="scrnshot" src="./assets/atheneum-pics/listing.png"/>
              <p className="blog-body">*Delete button for admins only :^)</p>
              <img className="scrnshot" src="./assets/atheneum-pics/otherprofile.png"/>
              <p className="blog-body">
                I handled form submission as well with Redux Form, which saved me time having to update state in React when filling out forms, and made it very simple to create the form below for listing submission.
              </p>
              <img className="scrnshot" src="./assets/atheneum-pics/newform.png"/>
              <h3 className="subheader">Back-end</h3>
              <p className="blog-body">For the backend, I used Express with Node.js to handle HTTP CRUD operations, and MongoDB to store user data. </p>
              <p className="blog-body">For the search I used simple text indexing in Mongoose to find search terms in the title and body of listings and return the ones that matched. This was a fairly elementary implementation of search, but for Atheneum, it was good enough to fill the search functionality. In my future projects, I will definitely look into trying to implement a search algorithm probably based on ranking.</p>
              <img className="scrnshot" src="./assets/atheneum-pics/search.png"/>
              <p className="blog-body">
                For user authentication, I implemented classic email and password authentication, using the bcrypt javascript node module for password hashing and salting to protect user information. For Atheneum, I did not implement email verification, but for future projects, it is something I will be looking into, to ensure even greater account and user information security. Alongside, email and password authentication, I included social authentication for even simpler account creation. Using OAuth for Google and Facebook authentication, it allowed users to create an account with existing services they already use, and not have to give their passwords to me if they did not trust my site. It made creating an account as easy as clicking a button and allowing the app to access the user’s display name, and profile picture to use with Atheneum.
              </p>
              <img className="scrnshot" src="./assets/atheneum-pics/login.png"/>
              <h3 className="subheader">Conclusion</h3>
              <p className="blog-body">I think that I made fairly large strides from my last project (Who’s Right) with Atheneum. I created a more complex front-end that displayed larger amounts of information effectively, and implemented more features for the website as a whole. Overall, I was very happy with the way it turned out, and I learned a lot along the way.</p>
              <span className="blog-ender">
                A live example of this project can be found at: <a href="http://atheneumtutors.info">http://atheneumtutors.info</a>. Unfortunately, my github repo for this project is private due to me accidentally committing my amazon keys early on in the project (Big whoops). If you would like to discuss anything you’ve read with me, feel free to send me an email to <a href="mailto:lee.ma@uwaterloo.ca">lee.ma@uwaterloo.ca</a>.
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AtheneumBlog;

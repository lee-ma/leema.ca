import React from 'react';

class WhosRight extends React.Component {
  render() {
    return(
      <div className="container fadein">
        <div className="row">
          <div className="col-1">
            <a href="/projects" className="back-btn"><i className="fas fa-arrow-circle-left"></i></a>
          </div>
          <div className="col-11">
            <h1 className="blog-title">Who's Right?</h1>
            <p className="blog-subtitle">See what the internet thinks</p>
            <h3 className="subheader">Quick Summary</h3>
            <p className="blog-body">Who’s Right was a website I created as a fun social app that allowed users to post their opinions or thoughts, and then let other people vote on them to see how popular their thought was. I thought it would be a good way to spark debates and discussions online and help people connect with one another through ideas. Funnily enough, there was already a popular website that was established a long time ago called debate.org that an avid debate club friend of mine pointed out to me. Oh well, I still think I made something pretty cool.</p>
            <p className="blog-body">This project was one of the first full stack applications I built using the MERN stack, and I believe I accomplished a lot by putting it together. I had created profile pictures to show posts that people already voted on and their own posts, managed to limit users to one vote per account, and created a Youtube-like  “like bar” to visualize vote data. I also created a comment section where people could have discussions on the topics posted.</p>
            <div>
              <h3 className="subheader">Building the site</h3>
              <p className="blog-body">I began the front end by creating the “like bar”. This was done by creating an underlying div that had a red background color, and then placing a green background color div on top of it. The width of the green div was based on a Redux state obtained through a backend API call.</p>
              <img className="scrnshot" src="./assets/whosright-pics/postvote.png"/>
              <p className="blog-body">After that I created the buttons to actually vote on the post. I rendered the relevant components for the state of the page based on if the user had voted on it or not (buttons or “like bar” and comments) with a backend API call to check if the user had the post id saved under their user object in the database. </p>
              <img className="scrnshot" src="./assets/whosright-pics/buttons.png"/>
              <p className="blog-body">After finishing these components, I made the form to create a post, which was handled with Redux Form to easily handle input changes alongside React. Interestingly enough, I decided to create the category selectors with checkboxes styled as buttons. I realize now that was probably not the best approach, and using a component with an onClick method to update an array and button selection state might have been slightly easier to implement. I worked around the boolean return value of the checkboxes by creating a separate component for each category, passing the category name as a prop. Within the component I created an onChange event handler function that would add or remove the element from an array using the built-in javascript array concat and filter methods. This array would then be submitted along with the the rest of the form to the back-end creating a post with three tags.</p>
              <img className="scrnshot" src="./assets/whosright-pics/newform.png"/>
              <p className="blog-body">After finishing the post components, I moved onto creating the user dashboard, which showed the posts that the user posted and the posts they voted on, in case they ever wanted to come back to the posts. This was much of the same, just grabbing all the post ids from the user’s database object, then populating them with Mongoose.</p>
              <img className="scrnshot" src="./assets/whosright-pics/dash.png"/>
              <p className="blog-body">For authentication I decided to only implement social authentication through Facebook and Google. I thought it would be much easier and more secure for the users to simply use an existing social media account for a fun social app like this.</p>
            </div>
            <h3 className="subheader">Conclusion</h3>
            <p className="blog-body">Who’s Right was one of the first websites I had created using a React and Redux front-end. Before I had done a few basic websites using Express, Node.js, and MongoDB with Embedded Javascript (EJS). Using React with Redux was awesome for creating the reusable components like the comments for this site, as well as handling states to determine which components to render. I learned a lot building this site, and a good idea of the directions I need to grow.</p>
            <p className="blog-ender">I took down the live example of this site, but my github repo for this project is public and can be found <a href="https://github.com/lee-ma/whosright">on my Github</a>. If you would like to discuss anything you’ve read with me, feel free to send me an email to <a href="mailto:lee.ma@uwaterloo.ca">lee.ma@uwaterloo.ca</a>.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default WhosRight

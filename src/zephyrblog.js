import React from 'react';

class ZephyrBlog extends React.Component {
  render() {
    return(
      <div className="container fadein">
        <div className="row">
          <a href="/projects" className="back-btn"><i className="fas fa-arrow-circle-left"></i></a>
          <div className="col-11 offset-md-1">
            <h1 className="blog-title">Zephyr</h1>
            <p className="blog-subtitle">A place to keep my daily reflections.</p>
            <h3 className="subheader">Quick Summary</h3>
            <p className="blog-body">
              Zephyr was a website I created over the course of a weekend to practice my ability to design minimal UI, as well as to keep track of my progress over my life to promote personal growth. I kept the site to 3 functionalities: tracking accomplishments during the day, perspective changing events, and a general other category.
            </p>
            <p className="blog-body">
              The front-end of the app was created with React and Redux, and the back-end with MongoDB, Express with Node.js. I decided to keep the auth simple, only using Google OAuth.
            </p>
            <div>
              <h3 className="subheader">Exercising Minimalist Design</h3>
              <p className="blog-body">
                I began the front-end with the landing page after logging in. Going in, I knew I wanted to keep the UI super minimalistic. I still decided to give the app a cheesy name and subtitle, because why not? I then created three buttons based on what I wanted to track. After that a simple Logout link to not distract from the buttons.
              </p>
              <img className="scrnshot" src="./assets/zephyr-pics/landing.png"/>
              <p className="blog-body">
                After that, I went to create the forms for each button. For the accomplishments, I thought I wanted to be able to track three main things that happened during my day. I created the forms with Redux Form to easily handle inputs, saving some time not having to handle React Component states myself.
              </p>
              <img className="scrnshot" src="./assets/zephyr-pics/form.png"/>
              <p className="blog-body">
                For the past entries, I kept with the minimal approach. It is a simple page with just the header of the past entries, the date and then pretty much exactly what the user wrote, separated by a horizontal rule.
              </p>
              <img className="scrnshot" src="./assets/zephyr-pics/form.png"/>
              <p className="blog-body">
                I decided to put some fade transitions on Zephyr, and I found that it made the experience more enjoyable because it just makes the website feel more refined. This was something I overlooked in my previous projects, but is definitely something I will consider going forward from now on. However, I'll have to make sure I don't go overboard with it!
              </p>
              <p className="blog-body">
                After everything was done, I decided to just let users sign in with their Google account to save their data in MongoDB. The back-end of the project was created with Node.js and Express to handle the CRUD functions.
              </p>
              <img className="scrnshot" src="./assets/zephyr-pics/login.png"/>
              <h3 className="subheader">Conclusion</h3>
              <p className="blog-body">
                I was quite happy with the way Zephyr turned out. Although I didn’t accomplish too much in my development skills, as it was essentially a basic journal app, I think that it was a great application of my growing design skills. I hope to keep improving my design skills in future projects.
              </p>
              <p className="blog-ender">
                A live example of this project can be found at: <a href="http://lee-zephyr.herokuapp.com">http://lee-zephyr.herokuapp.com</a>. Check out the <a href="https://github.com/leema9321/zephyr">github repo here</a>. If you would like to discuss anything you’ve read with me, feel free to send me an email at lee.ma@uwaterloo.ca.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ZephyrBlog;

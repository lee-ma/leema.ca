import React from 'react';

class DayTrip extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-1">
            <a href="/projects" className="back-btn"><i className="fas fa-arrow-circle-left"></i></a>
          </div>
          <div className="col-11">
            <h1 className="blog-title">DayTrip</h1>
            <p className="blog-subtitle">My first fullstack Android app</p>
            <h3 className="subheader">Quick Summary</h3>
            <p className="blog-body">
              Daytrip is a mobile app I built in Android Studio using Java. I had been playing around with building Android apps for a little bit, creating small apps like tic tac toe, a drum soundboard, and a bitcoin price tracker. I decided I wanted to try to create a multi-page app with a database using Firebase that might help me track my daily activities.
            </p>
            <p className="blog-body">
              Starting this app, trying to create my own components and buttons was challenging. I used png files exported from Figma for my button images, which really fell apart when the screen size wasn’t exactly the size I was using in my emulator. The UI I came up with was also not the most intuitive. Despite all this, I was pretty proud of Daytrip, as I saw an idea I had no idea how to approach initially come to life.
            </p>
            <p className="blog-body">
              Looking back at it now, I learned so much from building Daytrip. It’s fun to see how much I’ve grown since that time.
            </p>
            <div>
              <h3 className="subheader">Building the app</h3>
              <p className="blog-body">I started the front end creating the dashboard of the app. I drag and dropped components in with the Android Studio Layout Editor, and then edited the XML to try to adjust the layout. It was a lot of trial and error to say the least.</p>
              <img className="scrnshot-mob" src="./assets/daytrip-pics/dash.png"/>
              <p className="blog-body">
                After building the dashboard, I started off with the BMI calculator. This was the simplest page to create, and used a pretty straightforward algorithm, inputting weight and height and then spitting out the user’s BMI, providing a table to show them the benchmarks for BMI values.
              </p>
              <p className="blog-body">After that I created each individual form in the same manner, using pngs exported from Figma for most of the components on the screen (Not the best idea I've had). </p>
              <img className="scrnshot-mob" src="./assets/daytrip-pics/form.png"/>
              <p className="blog-body">
                Grabbing the information from the form to put onto Firebase was a fairly straightforward process. I wrote Java classes to store the information from the form in an object. The information from the EditText components would get saved in a new object, which would get pushed to Firebase under the user's uid.
              </p>
              <p className="blog-body">The goal page below was the form I started with cause it was the least information to account for. Just a name and a description.</p>
              <p className="blog-body">
                The most difficult part of this app was definitely creating the list of items to display. I used Java ArrayLists to store the information, and then set a value event listener on the user’s Firebase instance. This would grab data snapshots from Firebase and add them to the List using an ArrayAdapter class. The ArrayAdapter class would populate the Layout of each card using an Inflater to populate the Activity.
              </p>
              <p className="blog-body">
                This whole process was quite a lot for me to take in, and I spent a very long time trying to figure out how everything worked. After spending a few days trying to figure out how to get the list to work, all I had left to do was duplicate the process for the remaining pages and then create the weather page of the app.
              </p>
              <p className="blog-body">The weather page of the app utilized the DarkSky weather API, passing in latitude and longitude data as parameters in an http request. Using an Async HTTP call library (<a href="http://loopj.com/android-async-http/">http://loopj.com/android-async-http/</a>), I got information from DarkSky in JSON format, and converted to Strings to display to the user their current temperature and conditions.</p>
              <h3 className="subheader"> Conclusion</h3>
              <p className="blog-body">
                Although Daytrip has room for improvement, I am very happy the way it turned out for my first multi-page fullstack Android app. I had a lot of fun and faced challenges I had to really think about to complete the app.
              </p>
              <p className="blog-body">
                I’m taking a break from Android development for a while to learn web development, but I will definitely be looking to get back in it some time soon. Hopefully, I’ll be able to apply a lot of the things I learned from this experience to make some great apps in the future.
              </p>
            </div>
            <p className="blog-ender">
              A live example of this project can be found <a href="https://play.google.com/store/apps/details?id=leema.com.daytrip1&hl=en">on Google play</a>. My repo for this project is also public <a href="https://github.com/LeeMa9321/daytripandroid">on my Github</a>. If you would like to discuss anything you’ve read with me, feel free to send me an email to <a href="mailto:lee.ma@uwaterloo.ca">lee.ma@uwaterloo.ca</a>.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default DayTrip

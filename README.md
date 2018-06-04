# Type/Code Front-end Exercise

For Type/Code's Front-end exercise I was tasked with creating the front-end for a blog site, including the creation of an inline-editable article title.

To create the experience I used React. React's component-level state allowed me to create the type of interaction we needed for the editable title. I researched for a out-of-box way to do so using NPM. I found this package: [react-inline-editing](https://www.npmjs.com/package/react-inline-editing) but ended up not using a library so that I could have more explict control. Here is what I was able to accomplish in 12 hours:

### Features
* 8-Column grid custom layout built with flexbox.
* Allowed for session storage of the article title using Local Storage.
* Created icon font using the icons provided.
* Created mobile-friendly layout.
* Knockout title text and knockout icon buttons.

### How it could be better!
* Integrate with a database using RESTful GET & POST
* Create slug collision logic. i.e Additional 5 random characters should be appended to the generated slug to dodge the collision in the backend.
* Fix small bug with slug: 'are-we-out-of-the-woods-yet-' adding a space at the end of the title creates an additional dash
* Additional finessing of the CSS for the title text in 'read mode'. I would add logic to add padding conditionally to each span so that it doesn't touch the edge. Additionally the comp from the team had the title text overlapping with the article body which I wasn't able to accomplish while keeping the knockout. I would investigate further a way to do this.


### Installing

To run the app you'll need node and npm. Install whichever way you please, I use homebrew:

```
brew install node
```

Then you will also need to install gulp:

```
npm install -g gulp
```

### Built With

* [React](https://reactjs.org/) - The web framework used
* [Gulp](https://gulpjs.com/) - Building and Serving
* [SASS/Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - CSS Preprocessor with automatic browser prefixing





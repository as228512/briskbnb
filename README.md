# Briskbnb

[Briskbnb Live][heroku]

[heroku]: https://briskbnb.herokuapp.com

Briskbnb is a cold climate, home rental, full-stack application, which was inspired by Airbnb.

- Front-end: React.js + Redux
- Database: PostgreSQL
- Back-end: Ruby on Rails

![Splash-Page](./readme_images/splash.png)

## Main Features

- [Users](#users)
- [Google Maps](#google-maps)

### Users

While access to the site is available without logging in, a user is granted extra permissions after having signed up, or selecting to log in via the demo user.

![login](./readme_images/loginGif.gif)

A user has the ability to:

- Update their personal avatar
- Search for a home
- Request a booking
- Review a home (if booking date has passed)

### Google Maps

Both Google Maps and Google Autocomplete are incorporated in the application.

First, Google Autocomplete wraps possible inputs for a user search, _splashInput and navInput_, Then, it determines if a user clicked one of the smart search suggestions (from the drop down), or simply hit enter after entering his or her search. If a user does not select an item from the drop down, a formatted address object is not returned from Google Autocomplete. In that case, an object with a string, of only the name searched, is fed back into Google Autocomplete to extract the correctly formatted address.

```js
const splashInput = document.getElementsByClassName("splash-search-bar")[0];
const navInput = document.getElementsByClassName("nav-search-bar")[0];
const autocomplete = new google.maps.places.Autocomplete(
  splashInput || navInput
);

autocomplete.addListener("place_changed", () => {
  const formattedAddress = autocomplete.getPlace().formatted_address;
  const getFormattedAddress = autocomplete.getPlace().name;

  if (formattedAddress) {
    this.setState({
      location: formattedAddress
    });
  } else {
    this.setState({
      location: getFormattedAddress
    });
  }
  this.handleSubmit();
});
```

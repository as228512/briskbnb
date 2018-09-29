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

First, Google Autocomplete wraps possible inputs for a user search, *splashInput and navInput*, Then, it determines if a user clicked one of the smart search suggestions (from the drop down), or simply hit enter after entering his or her search. If a user does not select an item from the drop down, a formatted address object is not returned from Google Autocomplete. In that case, an object with a string, of only the name searched, is fed back into Google Autocomplete to extract the correctly formatted address.

```js
  componentDidMount() {
    const splashInput = document.getElementsByClassName("splash-search-bar")[0];
    const navInput = document.getElementsByClassName("nav-search-bar")[0];
    const autocomplete = new google.maps.places.Autocomplete(
      splashInput || navInput
    );

    autocomplete.addListener("place_changed", () => {
      const formattedAddress = autocomplete.getPlace().formatted_address;
      const getFormattedAddress = autocomplete.getPlace().name;

      formattedAddress
        ? this.setState({ location: formattedAddress })
        : this.setState({ location: getFormattedAddress });

      this.handleSubmit();
    });
  }
  ```
  
After a formatted address is extracted, local state's "location" is set, and then passed into the Google Maps Geocoder. The status of the returned object is verified and the latitude and longitude are exported to another component to be read, and ultimately, set the correct boundaries and zoom distance of the Google Map.

```js
  handleSubmit() {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: this.state.location }, (results, status) => {
      if (status === "OK") {
        const searched = results[0].address_components[0].long_name;
        const view1 = results[0].geometry.viewport.b.b;
        const view2 = results[0].geometry.viewport.b.f;
        const view3 = results[0].geometry.viewport.f.b;
        const view4 = results[0].geometry.viewport.f.f;

        this.props.history.push({
          pathname: "/homes",
          search: `?view1=${view1}&view2=${view2}
                  &view3=${view3}&view4=${view4}&searched=${searched}`
        });
      }
    });
  }
```

![gmaps](./readme_images/googleMapsGif.gif)

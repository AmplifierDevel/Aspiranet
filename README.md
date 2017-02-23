# Aspiranet
Aspiranet envisions a world in which all children and youth are loved and cared for and all families have the resources to thrive.

## Introduction
This website is part of the brand platform for Aspiranet. It supports donations, delivers content and users can sign up to newsletter or apply for programs.

![Aspiranet Homepage](https://github.com/AmplifierDevel/Aspiranet/blob/master/assets/img/homepage-screenshot-for-documentation.jpg "Aspiranet Homepage")

## Usage

### Content management
All content is managed through [Contentful](https://www.contentful.com) . To access it login to www.contentful.com

![Contentful](https://github.com/AmplifierDevel/Aspiranet/blob/master/assets/img/documentation-content-management.jpg "Contentful")

- Content types can be filtered on the left.
- New content can be added on the top right **Add Entry**
- Content on unique pages such as **About Us**, **Approach** or **Homepage** will be found under **Unique Page Content**

### Videos on Careers and About
You will find the About Video URL and Career Video URL field in [Contentful](https://www.contentful.com) under **Unique Page Content**

### Staging website and previewing
A staging website is available at [https://aspiranet-staging.netlify.com](https://aspiranet-staging.netlify.com)

To preview your drafted content, save it. The staging website should build automatically and you will be able to preview your drafted content approximately after 1mn.

Make sure its still a **Draft** so that the production website does not display the new content. 

### Homepage Sliders
They are found under Campaign in [Contentful](https://www.contentful.com) . You can change their order using the *Order* field. 1 will be the first slide. 2 will be the second slide.

### Popups
When a new user comes to the website you can decide to display a popup. You can find it under Popup in [Contentful](https://www.contentful.com) .

**Note:** If there are more than one popup created, the website will always display the most recent one.

### Program locations
You can update the locations shown on the map under *Program Locations*.
- Enter the address on the map and then click Coordinates so that the address is translated into a geolocation.
- Enter the address as text. This will be displayed in the marker's window on the map.

**Note:** The *Internal Notes* field will not be displayed and is only for internal use.

### Events
Events are handled through [Eventbrite](https://www.eventbrite.com).
Create an event on the Eventbrite website and you will see a new **Event** content type added automatically to [Contentful](https://www.contentful.com) .
They will be accessible on your website at `/event/name-of-your-event-with-dashes`.

Example: 
If the `Title` of your event is `This is the second event`.
You should see it at `https://www.aspiranet.org/event/this-is-the-second-event`

### Donations
Powered throught [Stripe](https://www.stripe.com)

Login to your account in order to see all transactions.

**Act-On:** Everytime a donor completes a donation, he is added to  your Contacts list in Act-On with "Donation-Single" or "Donation-Recurring" tagged with his name.

**Opt-Out:** Everytime a users unchecks "subscribe me to the newsletter" he won't be added to Act-On

### Programs
All content for programs is found under *Programs*

Only the Foster and Adoptive Families has additional content that you will find under *Foster & Adoptive families* content type.

### Blog
In order to add blog Categories or Tags you first have to create them as a new Entry.

For a Category you will need to click on *Add Entry > Blog Category*. This will allow you to link a new *Blog* entry to your category.




## Technical Documentation

## Introduction 
This website is interacting with the following systems:
- Hosting & CDN [Netlify](https://www.netlify.com) 
- Content Management [Contentful](https://www.contentful.com) 
- APIs [Zapier](https://www.zapier.com)
- Events [Eventbrite](https://www.eventbrite.com)
- Payments [Stripe](https://www.stripe.com)
- Server Side Payment processing [Heroku](https://dashboard.heroku.com/)
- Tweets [Twitter](https://www.twitter.com)
- Customer Relationship Management [Act-On](https://www.act-on.com/)


## Installation
1. Clone this repository
2. Add the following **environment variables** to your terminal: 
  * ASPIRANET_CONTENTFUL_PREVIEW_KEY
  * ASPIRANET_CONTENTFUL_ACCESS_KEY
  * ASPIRANET_CONTENTFUL_SPACE_ID
  * ASPIRANET_CONTENTFUL_SPACE_ACCESS_TOKEN
  * ASPIRANET_CONTENTFUL_IS_PREVIEW
  * ASPIRANET_CONTENTFUL_API_URL
3. Remove the `Gemfile.lock` and run `bundle install`
4. Run `grunt`

### Requirements
- `jekyll 3.4.0` [Install](https://jekyllrb.com/docs/installation/) 
- `git v2.10.0` [Install](https://git-scm.com/doc)
- `grunt v1.0.1` [Install](http://gruntjs.com/)

### How the build process works
`build.sh` is responsible for the deployment on Netlify. Here is what it does:

1. Fetch the latest tweet
2. Fetch the program locations with `curl` and store them in `program_data.json`
3. Interpolates the environment variables in `_config.yml` and download all the [Contentful](https://www.contentful.com)  data
4. Removes the environment variables from `_config.yml`
5. Jekyll builds the site and copies the generated files to the `_site` folder.

**Note:** All files that are prefixed with an underscore `_` will be skipped. If you want to add a file like `_redirects` to the `_site` folder, just make sure it is added to the `include` array in the config file.

### Triggering the build process
It is triggered automatically by:
- Posting a new tweet on Aspiranet's Twitter account ([Zapier](https://www.zapier.com) integration)
- Adding a new entry on contentful
- Creating a new event on Eventbrite
- Pushing a git commit to the repository

It is also possible to trigger the build directly from the Netlify interface under *Deploys > Trigger Build*

### Payment processing 
Heroku is hosting the PHP file processing payments on the server side.
To install a local copy

1. Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line).
2. If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
  * `heroku login`
3. Clone the repository
  * `heroku git:clone -a aspiranet-payment`
  * `cd aspiranet-payment`
4. Deploy your changes
  * `git add .`
  * `git commit -am "make it better"`
  * `git push heroku master`

### Adding contacts to Act-On
[Zapier](https://www.zapier.com) is configured to add contacts to Act-On.
Unfortunately Act-On does not support checking for dupplicates. So the same contact might be added twice.

Act-On provides a feature that allows the contact list to be cleaned
![Act-On](https://github.com/AmplifierDevel/Aspiranet/blob/master/assets/img/documentation-act-on.jpg "Act-On")

[Amplifier Strategies](https://www.amplifierstrategies.com) recommends to use it before any export.


### Zapier 
[Zapier](https://www.zapier.com) is configured to execute the following tasks:
- When a donation is made, the donator email is added to the Contacts list in Act-On
- When the contact form is submitted we copy the information to the Contacts list in Act-On
- When a user signs up for the newsletter, the email information is copied to the Contacts list in Act-On
- When the fostering contact form is submitted we copy the information to the Contacts list in Act-On
- When a tweet is posted on the Aspiranet Twitter account, the website is rebuilt of website
- When an event is created on Eventbrite an Event Page containing the information is created in Contentful (and the website is rebuilt)

 Emails are sent from [Zapier](https://www.zapier.com) automatically for the 5 following cases:

 *  When a visitor makes a donation, an email is sent automatically to that visitor
 *  When a visitor submits the contact form, an email is sent automatically to that visitor
 *  When a visitor signs up to join the email list, an email is sent automatically to that visitor
 *  When a visitor submits the fostering contact form, an email is sent automatically to that visitor
 *  When an event page is created, a staff member from Aspiranet will receive a notification of the page creation


## Credits

Website developped by [Amplifier Strategies](https://www.amplifierstrategies.com) for [Aspiranet](//www.aspiranet.org).
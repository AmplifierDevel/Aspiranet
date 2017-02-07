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

### Programs
All content for programs is found under *Programs*

Only the Foster and Adoptive Families has additional content that you will find under *Foster & Adoptive families* content type.

### Blog
In order to add blog Categories or Tags you first have to create them as a new Entry.

For a Category you will need to click on *Add Entry > Blog Category*. This will allow you to link a new *Blog* entry to your category.




## Technical Documentation

## Introduction 
This website is interacting with the following systems:
1) Hosting & CDN [Netlify](https://www.netlify.com) 
2) Content Management [Contentful](https://www.contentful.com) 
3) APIs [Zapier](https://www.zapier.com)
4) Events [Eventbrite](https://www.eventbrite.com)
5) Payments [Stripe](https://www.stripe.com)
6) Tweets [Twitter](https://www.twitter.com)
7) Customer Relationship Management [Act-On](https://www.act-on.com/)

## Installation
1) Clone this repository
2) Add the following **environment variables** to your terminal: 
- ASPIRANET_CONTENTFUL_PREVIEW_KEY
- ASPIRANET_CONTENTFUL_ACCESS_KEY
- ASPIRANET_CONTENTFUL_SPACE_ID
- ASPIRANET_CONTENTFUL_SPACE_ACCESS_TOKEN
- ASPIRANET_CONTENTFUL_IS_PREVIEW
- ASPIRANET_CONTENTFUL_API_URL
3) Run `grunt`

### Requirements
- `git v2.10.0` [Install](https://git-scm.com/doc)
- `grunt v1.0.1` [Install](http://gruntjs.com/)

### How the build process works
`build.sh` is responsible for the deployment on Netlify. Here is what it does:
1) Fetch the latest tweet
2) Fetch the program locations with `curl` and store them in `program_data.json`
3) Interpolates the environment variables in `_config.yml` and download all the [Contentful](https://www.contentful.com)  data
4) Removes the environment variables from `_config.yml`
5) Copy the generated files to the `_site` folder.

### Triggering the build process
It is triggered automatically by:
- Posting a new tweet on Aspiranet's Twitter account (Zapier integration)
- Adding a new entry on contentful
- Creating a new event on Eventbrite
- Pushing a git commit to the repository

It is also possible to trigger the build directly from the Netlify interface under *Deploys > Trigger Build*

## Credits

Website developped by [Amplifier Strategies](https://www.amplifierstrategies.com) for [Aspiranet](//www.aspiranet.org) Aspiranet.
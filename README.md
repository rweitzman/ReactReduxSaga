# Opendorse Frontend Interview Project

## Project introduction

We’d like to move you forward in our hiring process by having you complete a small project.
This will help us get a good understanding of your writing styles and thought process. It is
not expected for you to spend more than 2-4 hours to complete this project. If you complete
the base requirements with time to spare, there is a list of bonus activities at the bottom
of this readme. Please be creative, have fun, and don’t hesitate to send any questions to
tommy.vacek@opendorse.com. We’re excited to see what you build!

— The Opendorse Product & Tech Team

## Project overview

For this tech assessment you will be contributing to a small react-redux project by
creating a grid of athlete social channels.

You will be provided an array of athlete channel objects in the following format:

```
{
  handle: string // the social channel handle
  id: string // the social channel identifier
  name: string // the social channel name
  platform: string // the social channel's platform (Reddit, Facebook, or Instagram)
  platformId: string // the social channel identifier on its respective platform
  profileImage: string // the profile picture for the social channel
  subscriberCount: number // the number of followers/subscribers for the social channel
  url: string // the url for the social channel
  verified: bool // the verified status for the social channel
}
```

Display the athlete channel data as cards in a grid for
Facebook `#3B5998`, Instagram `#C13584`, and Reddit `#FF4500` social channels
based on the following mockups:

![Mockup](src/assets/mockup.png?raw=true "mockup")

## Bonus activities (optional)

Time and experience level permitting, please complete one or more of the following bonus activities:

- Create a UI for sorting the athlete channel cards
- Create a UI for searching the athlete channel cards
- Add a loading state when athlete data is being fetched and/or searched
- Add success and error toasts when athlete data is being fetched and/or searched
- Add a 'No results' state when no athlete data is returned from a search
- Add a simple welcome page to incorporate routing between your pages
- Make the grid responsive
- Add some unit testing

## Getting started

1.  Clone the repo
2.  Run `npm install` to download dependencies
3.  Run `npm start` and open your browser to http://localhost:3000

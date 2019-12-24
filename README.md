# UpSkillMe

UpSkillMe was founded to provide young people with the opportunity to record, celebrate and gain maximum benefit from their achievements.

This MVP is a functional prototype which includes the core features of the product. It will be used as a proof of concept that will inform future versions of the product as the business scales up.

---

## Team

![](https://i.imgur.com/CBzRZN8.jpg)

---

## Setting up the project

If you'd like to run this project locally, please message us and we can send you a shell file to play with on an Airtable.

Or alternatively create your own database on AirTable with the schema laid out below.

To run locally:

1. `git clone https://github.com/fac-17/UpSkillMe.git`
2. `cd UpSkillMe`
3. Run `npm install`
4. Run shell script file `sh *name of file*`
5. Run `npm start` in a new tab

## Overview of the project

![](https://i.imgur.com/AqYrIRh.jpg)

The overall aim of the project is to enable young people to learn in-demand skills and have a digital record of related achievements.

Completed as part of the Founders & Coders: Tech for Better project which connects junior developers with small business', start ups and charities.

> "This programme would be really beneficial to me because I do not have a technical background, I am really hoping that this can help me define the technical roadmap and meet coders who can share their advice with me. I have a really good idea of what I want to build and would love the opportunity to get some help making my vision a reality. I have launched my MVP in schools, so with this product I will enhance the service that we provide to students and schools which is completely free. This programme will also help us become more attractive to investors and businesses so that we can generate revenue."
> **Lucy - Founder of UpSkillMe**

## Solutions

The initial user research showed that users needed a way to record and develop in-demand soft and hard skills whilst they are still in education.

The app allows users to record the details or activities, receive points that quantify their experiences and view potential opportunities.

## Main user journey

> “To be able to access a unique account on the UpSkillMe platform, add in experiences/events/achievements and get points that contribute to skill badges.”

## Tech stack

- React js
- Styled components
- Jest
- Netlify
- AirTable

### Design week process and final design

![](https://i.imgur.com/MDpSkdk.png)

#### Inspiration

- ClassDojo
- DuoLingo
- Salesforce Trailhead
- Other inspiration: https://teambit.io/

#### User research

![](https://i.imgur.com/ipfvcbq.jpg)

We conducted user research with four year 12 students from a school in South London. Synthesised results below.

#### Key findings from user testing

##### Skills

- Unclear what the badges refer to in current form
- Unclear that the badges are clickable - add shadow

##### Activities section

- Not totally clear what the 'view confirmation' link is for.
- Not totally clear that these are activities in the past or things to sign up for in the future?
- Could rename the section 'Activity history' - "see a list of you past achievements"
- "Skills" - explain these are achievements??
- 'Activity+' button looked like 'add document' or link to start a new page. Not obvious it's for adding another activity.
- Could use that same 'Activity+' icon to where the view confirmation box is currently. ~~
- Could change the add activity button to a bigger floating button that just says 'add activity'
- 'View confirmation' was not clear what it referred to.

##### Activity sign-up form

- Linking from the activity section should be optional, and that should be clear
- Could lose the link thing entirely??
- Link in the activity add section is phrased differently to how it appears in the activity section box
- Arrow to click through the form could be bigger

### Airtable

We chose to use AirTable instead of alternative solutions such as a PostgreSQL database as there was minimal set up time, API docs are clear and easy to use and following handover the product owners will be able to access and update information easily and securely.

#### Airtable access

- Due to the sensitive nature of the data captured by the app, access to the Airtable is restricted to members of the development team and the product owner/s.
- In future builds the ability to post live opportunities may become available. In this case please contact a member of the UpSkillMe team to have the opportunity added to the Airtable.

### Development week 1

Goal of the week: Implement basic functionality including the following user journeys:

- As a user I want to be able to add a new event to my account and see it on my personal page.
- As a user I want to be be able to see all available badges on my account.
- See my personal record of activities

### Development week 2

Goals of the week: Deploy on Netlify, implement styling, possibly add additional user stories:

- As a user I should able to signup, login and logout in separate journeys
- As a user I should be able to find information on new activities

### Deployment details

- This is a React app deployed on Netlify with no backend. Lambda functions are used to complete API data requests
- If any issues occur with the live site please raise an issue on the master (deployed) branch

### Ongoing and future work

- Authentication (possibly with Netlify Identity)
- Teacher login area
- Employer login area
- Administrator login area
- Login with magic link
- Link opportunities to skills
- Highlight certain opportunities
- Limit number of activities per page

### How to contribute

- If you wish to contribute to this project please raise an issue or pull request. A member of the development team will review and respond.

### Resources we used

- Serverless Lambda Functions https://www.youtube.com/watch?v=drJwMlD9Mjo&t=697s
- React Docs https://reactjs.org/docs/hooks-overview.html
- Styled components - https://www.styled-components.com/
- Netlify Lambda functions docs https://www.netlify.com/docs/functions/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


# Sample User Project By Subayyal Ayub

Smaple user is a Coding Challenge Project that was given to me by Brave BPO. It is use to show list of users in the form of cards. You can search for user by using their name in the search bar. You can also apply filter for male or female to get data accordingly. 

I'm fetching the data from [RandomUser](https://randomuser.me/) api. You can also view the live app [here](https://subayyal-coding-challenge.vercel.app/) 

I created this site using Vite, Reactjs, TailwindCss and other libraries listed below.
## Installation

Clone the repository and then follow the steps

```bash
  cd project_name
  npm i
```

after the installation is completed and node_modules have successfully created.
Get Google Maps api key from [Google](https://console.cloud.google.com/).


### Environment Variables

create an .env file in the root directory with following code:

`VITE_RANDOM_USERS_BASE_URL ="https://randomuser.me/api/"`

`VITE_GOOGLE_MAPS_API_KEY = "Your Google Maps Api Key"`




after creating the .env file, you can run the npm command

```bash
  npm run dev
```

## Demo

You can view the live website [Here](https://subayyal-coding-challenge.vercel.app/) or follow the installation guide below.
## Libraries and Packages

Libraries that I used in this website are below.
- Vite to create react aplication
- [TailwindCss](https://tailwindcss.com/) for styling
- [Axios](https://www.npmjs.com/package/axios) for API Fetching.
- [React Router](https://www.npmjs.com/package/react-router-dom) to Create Routes.
- [React Toastify](https://www.npmjs.com/package/react-toastify) to show error.
- [React Country flag](https://www.npmjs.com/package/react-country-flag) to show flags with users nationalities.
- [Font awesome](https://fontawesome.com/) for icons and logos.
- [google maps api](https://www.npmjs.com/package/@react-google-maps/api) to show Google Maps on the Profile Page.
- [Animate on Scroll](https://michalsnik.github.io/aos/) for cards animation.
- [Vercel](https://vercel.com/) for deployment of the live version.

## Fonts

Fonts that I used in the website are

- [Iceberg](https://fonts.google.com/specimen/Iceberg)
- [Roboto](https://fonts.google.com/specimen/Roboto)

## Bonus

- I have added nationality with each user on the Home page, and the User Profile page.
- Added Google Maps Location of each user on the User Profile page

## Authors

- Design and Developer by [@subayyalawan](https://github.com/subayyalawan)
- My social linkedin [subayyalawan](https://www.linkedin.com/in/subayyalayub)


## Known Bug

I used a free API key for the google maps api so there is an issue with displaying map. It shows warning message "This page can't load Google Maps correctly." Just click Okay button and It will display the map correctly. The google map api is a paid service thats why I used a free key, If You use a Paid key, It will not show any warnings.

# Dasbboard Next.js
## About 

This project was built with:
- **Next.js** as the frontend framework.
    - **NextAuth.js v5** to manage authentication and JWT sessions.
    - **App Router** to access React's latest features, such as Streaming.
- **Tailwind** as the base CSS library.
- **DaisyUI** as the component framework used to build forms.

The app has the following features and pages:
- Connection with a [backend API](https://github.com/luizgadel/dashboard-nestjs).
- Login by username and password.
- Topbar with:
    - navigation links reflecting the current page;
    - a dropdown menu with a logout button.
- A homepage with cards describing other pages and its contents. 
- A users' page showing all users registered on database.

## Demonstration

The app is deployed on Vercel and can be accessed by clicking [here](https://nextjs-dashboard-lp-kappa.vercel.app/).

## Development Notes

### Next.js

This is my first personal project using Next.js. To take my initial steps with the framework, I took the dashboard's tutorial available on the official site. In that tutorial, I learnt to use the main features of Next like App Router, Server and Client components, Streaming, Suspense, and NextAuth.

After the tutorial, I started making changes to implement the pages I wanted for this project and got on my first problems without solution. For example:
- The use of asynchronous methods in Client components: Next.js doesnt allow for calls of async methods in events like the 'onClick' of a button. Instead, it seems the pattern for calling an async method for a button click is using the 'action' event of a form that is positioned as a wrapper for the button.
- NextAuth's session object: When looking for ways of accessing the session object of NextAuth, I stumbled across lots of references indicating a method called 'getSession' or 'getServerSession', but couldn't find them on my NextAuth package and import it. Took me some time to realize that this methods weren't available because I was using the version 5 of NextAuth (which apparently changing its name to Auth.js) and, in this new version, the session object is now intermediated by a method called 'auth'.

### Tailwind

Before this project, I had only used Tailwind as a test for an Angular project and, in that ocasion, I found its use to be very similar to Bootstrap, which I have used in many previous projects. I've also always liked to work with a CSS framework, that said, Tailwind feels pretty natural and fun to deal with.

In this project, Tailwind is used to build the UI of almost all pages and components. For example:
- the home page cards; 
- the topbar and its dropdown menu;
- the users' table component; 
- users' create and edit form components; 
- a button that triggers navigation or an action, depending on its props. 

I've also used Tailwind to create a custom palette with halborn's site primary color (#C5FF01). This palette is used on buttons through out the pages and the topbar component.  

### NextAuth and the backend JWT

After log in, NextAuth is responsible for managing the user's session. That frees me from the task of creating a JWT (authentication token) and watch for it expiration date from time to time. Or so I thought.

The JWT created by NextAuth is not the same one created by the backend on log in. Consequently, during some time, I had problems communicating with the backend, since the only JWT I had was the one from NextAuth and the backend would only authorize me to access the secure endpoints, like the users' list, if I passed his authentication token.

The solution I found was to maintain the backend's JWT on the session's NextAuth object. The session object is accessible through the "auth" method of NextAuth v5 and, using that method, I could easily recover the correct JWT before making a request to any of the backend's secure endpoints.

### DaisyUI

I have worked with other component libraries before, like PrimeNG for Angular and Material Design for Android, but I was having a hard time looking for one to use with React or Tailwind because the first ones I got to try presented a weird design or had no guidelines, like MUI. 
DaisyUI doesn't have this problems so it was my pick.

In this project, I have used DaisyUI on the forms of user create and edit. 
Later, I pretend to change my topbar's dropdown menu implementation for DaisyUI's dropdown component.

## References

1. [Learn Next.js | Next.js](https://nextjs.org/learn/dashboard-app)
2. [Customizing Colors - Tailwind CSS](https://tailwindcss.com/docs/customizing-colors)
3. [Extendind the session - Auth.js](https://authjs.dev/guides/extending-the-session)
4. [Text Input component](https://daisyui.com/components/input/)
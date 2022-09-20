# Task

The project is made as an internship task with the following requirements:
[technical_task](https://github.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/blob/main/for_readme/task.pdf)

# Description
This todo app provides a user the ability to manage their daily tasks with attractive user-friendly interface. It's available to switch  between different accounts using email&password or via personal Google account. Each task is supported with a CRUD set of operations. The app has its own calendar where days are differentiated depending on whether tasks are done or not. A user can switch between light and dark themes, whereas the app remembers the last theme chosen.
Here are some screenshots to demonstrate the app. Entry pages:


# How to run the app

To run the app you should prepare an IDE and write in the terminal `npm start`.

To build the app you can use `npm build` command.

If you want to run eslint formatter you should use `npm test`. ??????


# Database snapshot

Firebase database manages server storage logic. 
It provides the authentication ability via email and password or via Google account.
An authentication record example:
![authentication](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/65d86450861310cf17412846f9e7f21eee39ab34/for_readme/auth.jpg "authentication")

The app uses "tasks" array entity in order to save all the users' todos.
Here's a task example:
![task](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/65d86450861310cf17412846f9e7f21eee39ab34/for_readme/db_snapshot.jpg "task")
It contains fields describing the user's email, task title and description, the date a todo should be executed and its state identifier of being done or not.
Each record has its own unique id key.


# Application stack
This app is designed using following technologies:

- **_TypeScript_** - a strongly typed programming language that builds on JavaScript.
- **_React_**  - JavaScript library for creating user interfaces.
- **_React Router_** - library that enables "client side routing".
- **_Redux_** - JavaScript library for state management.
- **_Craco_** - configuration layer for create-react-app.
- **_Firebase_** - an app development platform backed by Google.
- **_Lottie_** - a library that parses animations exported as json.


# Files & folders description


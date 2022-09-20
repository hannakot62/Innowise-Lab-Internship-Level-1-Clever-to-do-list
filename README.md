# Task

The project is made as an internship task with the following requirements:
[technical_task](https://github.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/blob/main/for_readme/task.pdf)

# Description
This todo app provides a user the ability to manage their daily tasks with attractive user-friendly interface. It's available to switch  between different accounts using email&password or via personal Google account. Each task is supported with a CRUD set of operations. The app has its own calendar where days are differentiated depending on whether tasks are done or not. A user can switch between light and dark themes, whereas the app remembers the last theme chosen.


Here are some screenshots to demonstrate the app. 

Entry pages:
![entry_dark](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/entry%20dark.jpg "entry_dark")
![entry_light](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/entry%20light.jpg "entry_light")
![signup](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/signup.jpg "signup")
![signin](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/signin.jpg "signin")

Todos loading is supported with the following animations:
![loading_dark](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/loading%20dark'.jpg "loading_dark")
![loading_light](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/loading%20light.jpg "loading_light")

Loaded tasks are shown according to the day selected and whether they are done or not:
![tasks_dark](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/tasks%20dark%20undone.jpg "tasks_dark")
![tasks_dark2](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/tasks%20dark.jpg "tasks-dark2")
![tasks_light](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/tasks%20light.jpg "tasks_light")

If there are no tasks for a selected day a skater animation appears:
![skater](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/chill%20light.jpg "skater")


Adding / Editing pages:
![edit](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/edit.jpg "edit")
![new](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/main/for_readme/new.jpg "new")

# How to Run the App

To run the app you should prepare an IDE and dependencies used writing `npm install`. Then write in the terminal `npm start`. It will create a localhost on your browser where the app is ready to be used.

To build the app you can use `npm build` command.


# Database Snapshot

Firebase database manages server storage logic. 
It provides the authentication ability via email and password or via Google account.
An authentication record example:
![authentication](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/65d86450861310cf17412846f9e7f21eee39ab34/for_readme/auth.jpg "authentication")

The app uses "tasks" array entity in order to save all the users' todos.
Here's a task example:
![task](https://raw.githubusercontent.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/65d86450861310cf17412846f9e7f21eee39ab34/for_readme/db_snapshot.jpg "task")

It contains fields describing the user's email, task title and description, the date a todo should be executed and its state identifier of being done or not.
Each record has its own unique id key.


# Application Stack
This app is designed using following technologies:

:gem: **_TypeScript_** - a strongly typed programming language that builds on JavaScript.

:gem: **_React_**  - JavaScript library for creating user interfaces.

:gem: **_React Router_** - library that enables "client side routing".

:gem: **_Redux_** - JavaScript library for state management.

:gem: **_Craco_** - configuration layer for create-react-app.

:gem: **_Firebase_** - an app development platform backed by Google.

:gem: **_Lottie_** - a library that parses animations exported as json.


# Files & Folders Description
 - **_for_readme_** folder is responsible for all the sources used in the documentation you are reading :)
 - **_public_** folder contains main HTML file.
 - **_src_** folder contains all the source code and animations used. More details [here](https://github.com/hannakot62/Innowise-Lab-Internship-Level-1-Clever-to-do-list/blob/main/src/README.md).
 - **_craco.config.ts_** file is used for import aliases configuration.
 - **_package.json_** and **_package-lock.json_** files describe all the side dependencies used in the project.
 - **_.gitignore_** file contains folders' and files' names that shouldn't be pushed along with the other content.
 - **_tsconfig.json_** and **_tsconfig.paths.json_** are configuration files that describe TypeScript project settings.

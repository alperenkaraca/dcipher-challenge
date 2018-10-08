# Challenge

This small app contains a "Dashboard" with two different "widgets": `Counter` and `Todo`.
Each widget uses React + Redux for rendering and state management.
The dashboard is currently fixed with one instance of each widget type, `Counter` and `Todo`.
If the user clicks "Add Counter" or "Add Todo" in the empty slot, a "Not Implemented" alert will be shown.

Your task is to make it possible for the user to create an arbitrary number of new instances of `Counter` and `Todo` by clicking in the empty slot.
Each new instance should have its own separate state.

You can add any open source library to the package list, and rewrite the app in any way that you see fit to solve the problem, with one exception:
the widget state must be kept in Redux!

## Setup

```
$ git clone git@github.com:kairosfuture/dcipher-challenge.git

$ cd dcipher-challenge

$ npm install
```

## Start dev server

```
$ npm start
```

You should now be able to browse to <http://localhost:8000>.

## Submit

#### Alternative 1:

Create a *private* fork of this repository on GitHub (so that other participants cannot copy your solution), and give accounts `loffek` and `Atralbus` at least read access.

#### Alternative 2:
If you don't use GitHub, or are out of private repositories, its ok to just zip the source and email it to `info@dcipheranalytics.com` instead.

# The 360 Review Process

An Ember based front end we application for interfacing with human resources
bi-annual review processes.

## The Application

![Imgur](https://i.imgur.com/4FouJfj.png)

[360 REVIEW](https://mdcollins80.github.io/ThreeSixty-Review)
[GitHub Repository](https://github.com/mdcollins80/ThreeSixty-Review)


The 360 Review process is meant to give supervisors a well rounded view of their
direct reports.  Each employee is reviewed by their supervisor and any direct
reports, as well as other employees with whom they work on a regular basis.

The 360 Review web app is meant to facilitate this review process by enabling
employees to log in to their own account to view their reviews.  Once logged in,
a user can view the reviews they have to complete, and any reviews they may have
already submitted.  Users may also create additional reviews if they so choose.

In future versions, users will be able to request reviews from others, and
supervisors will be able to see their direct reports' aggregrated results.
Network wide statistics will also be made available in future releases.

## The Back End

[360 REVIEW API](https://frightening-citadel-39718.herokuapp.com/)
[GitHub Repository](https://github.com/mdcollins80/ThreeSixty-Review-Api)

The back end API was built on Ruby on Rails with a PostGreSQL database.

## Wireframes and User Stories

![Imgur](https://i.imgur.com/DXH2zla.jpg)

User Stories:
- A user can sign up.
- A user can sign in.
- A user can change their password when signed in.
- A user sees a list of reviews to complete.
- A user can click on review name to navigate to that review.
- A user can complete a review with input fields.
- A user can submit partial reviews.
- A user can include strengths/improvements/open response comments.
- A user's completed list is populated when a review is saved.

## Technology

This front end was completed using:
- Ember
- JavaScript
- Handlebars
- HTML
- CSS
- Sass

## Planning and Process

For this project, my aim was to create an application where employees could
review their fellow employees.  I knew I had to keep it simple to start, so the
first version allows users to create reviews for other employees, edit those
reviews with ratings and comments, and submit them to the database.  I also knew
that I wanted to create some additional functionality for an Admin user.  I
decided that would be in the form of creating new users (rather than rely on all
users to sign up in order to create their account).

I started by creating a
Reviews resource on the back end and walked through each CRUD function, one at a
time, building out the routes and components in Ember necessary to display the
information required for each CRUD function.

Lastly, I wanted to create an admin type user that could access a number of
additional routes not available to the non-admin user.  I knew this would require
an admin boolean in the database, and that extending the functionality to the
admin user would require code to verify that the current user's admin status was
true.  I decided to place that functionality on a link in the navbar that would
show up if the user's admin boolean were true.  I was able to get that working
using a handlebars helper {{#if Admin}} and thus turned my attention to building
in the ability to create a new user without having to utilize the sign up route.
I ended up taking the code used in the sign-up route and created a new action in
a new ember route called `user-new`.

I am happy with this first draft's final product and look forward to continuing
to improve upon the features required to turn this in to a production level
application.

## Future Release

I would like to remove the need to enter reviewee names and business units as
they are already in the system and associated with a review via the Users table.

I would like to implement the ability for an admin user to import the
reviews via CSV, removing the need for users to create their own reviews for
the most part.

I would like to implement statistics for individual users, and for the organization
as a whole.

I would like to give users the ability to request reviews from other users as
this is an important part of the review process.

I would like to give supervisors the ability to see their direct reports reviewers
and edit those lists as they see fit, and ultimately see the summary statistics
resulting from those submitted reviews.

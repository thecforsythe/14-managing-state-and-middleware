![DV](https://www.deltavcodeschool.com/wp-content/uploads/DeltaV.png)  Lab 14: Managing State
=======
[Code of Conduct](https://github.com/codefellows/code-of-conduct)

Let's circle back to our UI logic... You know, everything that sets up the page for interaction. Now we can use our new tools of routing, middleware, MVC separation, SQL, and resource rendering.

Let's use these new tools to review the refactored components of the UI: author filter, category filter, the teaser link, and a bunch of click events.

Work with your partner to *comment* on the execution path for sections labeled with "COMMENT:".  These items, ***which appear in the code immediately before the code they are referring to***,  are essentially TODO items that have been done for you and demonstrate the concepts presented during lecture.  While you will not be building out any additional functionality for this assignment, you will need to describe what each newly refactored method does and where it points back to.  The navigator for this assignment should be tracing the execution path and determining what each new method/update is doing while the driver will need to summarize the navigator's thoughts into a 1-2 sentence comment (below each "COMMENT:" item).  Be sure to switch roles after 4-5 COMMENT items have been completed.

## Helpful Hints?
 - Don't forget to `npm i` to download our modules!
 - Review the `Article.findWhere` method.  This lets you grab a subset of articles by some field/value combo you pass in.
 - The "Read On" link is now a standard html link.
 - The filters now populate based on what's in the DB, not what's in the DOM: "single source of truth"
 - If there are spaces in a URL, we have replaced them with a '+'

---

## Submission Instructions

When you are finished with lab, follow these steps to submit your work. Create one Pull Request (aka: "PR") from your Forked repo to the DV repo with your changes, and you'll each submit that same PR link in Canvas.

1. Ensure that all your local changes are committed, and pushed to your origin repo.
1. Visit the origin repo on github.com, and ensure that all of your completed work has been merged to master via Pull Requests within your repo.
1. Create a new PR from your Fork to the DV repo and ensure the branches look correct.
1. Fill in the template based on the text box prompts:
   1. Write a good descriptive summary of your changes:
     1. Be sure to include how much time you spent on it, and who you worked with.
     1. Briefly reflect on and summarize your process.
1. When you create the PR, it will have a unique URL. Copy this link, share with your partner, and paste it into the assignment submission form in Canvas. Both the driver and the navigator will submit the same PR link.

---

## Learning Objectives

 - Students will understand the role middleware in web application routing
 - Students will be able to extract query parameters from the PageJS `context` object and use `next()` to create a sequence of middleware functions

---

## Resources  

[The relevant PageJS documentation](https://github.com/visionmedia/page.js#context)

---

## Feature Tasks  

- Accurately comment on each COMMENT item to demonstrate your understanding of the functionality of the app, and especially the execution path of the individual functions/methods.

---

## Rubric  

 Criteria | Pts
 ---|---
 Meets all Assignment Reqs | 6
 Uses idiomatic code style | 3
 Follows proper Git workflow | 1
 **Total** | **10**

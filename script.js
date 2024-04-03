"use strict";

////////////////////////////
//// window.history API ////
////////////////////////////
// Coding Note #56

/*
 * The window.history object contains the browser's session history. It can be used to manipulate
 * the browser's session history (i.e., the pages visited in the tab or frame that the current page is loaded in).
 */

// back() - Navigates to the previous URL in the history list.
// This is equivalent to the user clicking the back button in their browser.
window.history.back();

// forward() - Navigates to the next URL in the history list.
// This is equivalent to the user clicking the forward button in their browser.
window.history.forward();

// go() - Navigates to a specific URL from the history list.
// Accepts a positive (to go forward) or negative (to go back) integer as a parameter.
window.history.go(-1); // Goes back one page

// pushState() - Adds an entry to the history stack.
// This method does not cause the browser to load the new URL, but it does allow you to modify the URL displayed in the browser.
// pushState(stateObj, title, url)
// - stateObj: An object representing the state associated with the new history entry.
// - title: A title for the new history entry. This parameter is currently ignored by most browsers.
// - url: The URL of the new history entry. The browser won't navigate to this URL, but it will be displayed in the address bar.
window.history.pushState({ page: "another" }, "another page", "another.html");

// replaceState() - Similar to pushState(), but modifies the current history entry instead of creating a new one.
// This is useful for updating the state object or URL of the current history entry without adding a new history entry.
// replaceState(stateObj, title, url)
window.history.replaceState(
  { page: "another" },
  "another page",
  "another.html"
);

// Handling popstate event
// The popstate event is fired when the active history entry changes.
// If the user navigates to a new state, a popstate event is fired. You can listen to this event to react accordingly.
window.onpopstate = function (event) {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`
  );
};

// Note: pushState() and replaceState() methods do not trigger a popstate event
// The popstate event is only fired by clicking on the back button (or calling history.back() or history.forward())

// Follow @coding_feature on Instagram for more content! 👍

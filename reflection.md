# Reflection Questions

## Why is context useful?

Context is useful because it allows data to be shared globally between components without passing props manually through every component level.

---

## How is it different from local state?

Local state only works inside a single component. Context allows multiple components to access and update shared state.

---

## What would prop drilling look like here?

Without context, the counter value and functions would need to be passed from App.js to child components through props, even if intermediate components do not use them.
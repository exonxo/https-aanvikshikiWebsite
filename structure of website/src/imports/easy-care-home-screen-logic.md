Detailed AI Prompt — Business Logic for Easy Care Home Screen

Design the home screen UX and logic for a service marketplace app called Easy Care.

Business Overview

Easy Care is a Kolkata-based platform that allows users to book caretakers and house helpers. The target audience is mid to high-income households who prioritize trust, safety, convenience, and clarity.

The platform supports:

Posting a service requirement

Receiving responses from nearby helpers

Negotiating price directly

Booking and managing requests

The emotional positioning of the brand is:

“I don’t have to worry anymore. This is handled.”

The home screen must reduce anxiety and encourage decisive action.

Core Business Model

Easy Care operates on a request-first model, not a browse-first marketplace.

Primary flow:

User posts a requirement (service type, location, timing, budget).

Nearby verified helpers respond.

User reviews profiles and negotiates if needed.

User confirms booking.

Payment may happen offline or later in future versions.

The goal of the home screen is to push users into Step 1 quickly.

Browsing categories is secondary.

Primary User Intent

When users open the app, they are typically:

Looking for immediate help at home

Trying to find a caretaker quickly

Managing an ongoing request

The home screen must prioritize:

Posting a new request

Resuming an existing request

Seeing active responses

It should NOT prioritize casual exploration.

Home Screen Business Logic

The home screen should follow this priority hierarchy:

1. Location Awareness

Always show current location at the top.

Users must feel the service is local and relevant.

2. Primary Call to Action

A large, clear action button: “Post a Requirement”

This is the most important action.

Must be visible without scrolling.

Only one primary CTA.

3. Trust Layer

Short reassurance text:

“Background-verified helpers”

“Price negotiation supported”

This reduces fear of letting strangers into the home.

4. Quick Service Shortcuts

2–3 primary categories:

Caretaker

House Help

Elder Care

These shortcuts pre-fill the request flow.

5. Conditional Logic

If user has:

An ongoing request → show a status card

Helpers responded → show “View Responses”

Active booking → show “Manage Booking”

If user has no activity:

Show suggested services instead.

6. Secondary Exploration

Show “Popular Near You” or “Recently Requested in Your Area”

Max 2 rows.

Exploration must not overpower action.

UX Principles

The design must:

Feel calm and reassuring

Avoid clutter

Avoid too many choices

Use soft curves and accessible typography

Be optimized for elderly family members as secondary users

The home screen must allow a user to post a request within 5 seconds.

Constraints

No complex filters on home screen

No infinite scrolling

No heavy animations

Must work clearly in mobile-first layout

Must support future scaling (admin, ratings, verified badges)

Deliverables Expected from AI

Clear section hierarchy

Component structure

State-based UI logic

Empty state logic

Conditional rendering logic

Edge cases (no responses, delayed responses, rejected requests)

Key Success Metric

If a first-time user opens the app and can confidently post a requirement in under 5 seconds without confusion, the design succeeds.

Now you’re giving the AI:

Business logic

Emotional positioning

Functional flow

Decision hierarchy

UX constraints

Instead of “design me a home screen”.

That’s the difference between amateur prompting and product thinking.
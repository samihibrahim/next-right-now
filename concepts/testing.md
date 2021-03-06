---
layout: default
title: Testing
parent: Concepts
nav_order: 70
---

# Testing
{: .no_toc }

<div class="code-example" markdown="1">
Unit tests and end-to-end (E2E) tests workflow.
</div>

{% include page-toc.md %}

---

## CI tests Workflow

Vercel will automatically run the tests before deploying, as configured in the `yarn build` command.

> If any test fail, the deployment will be aborted. This ensures that any code that doesn't pass the tests never get deployed online.

Once a deployment has been deployed on Vercel, **Github Actions** will run our **E2E tests**, to make sure that the app behaves as expected.
This can also be considered as an integration tests suite.

## Running tests manually (locally)
You can run interactive tests using Jest with `yarn test` script.

## Running E2E tests manually (locally)
You can run interactive E2E tests using Cypress with `yarn e2e:open` script.

You can also run them non-interactively using `yarn e2e:run` script.

> You may need to run `yarn e2e:install` script first

---

<div class="pagination-section">
    <span class="fs-4" markdown="1">
        [< CI/CD](./ci-cd){: .btn }
    </span>
    <span class="fs-4" markdown="1">
        [Guides: Testing](../guides/testing){: .btn .btn-blue }
    </span>
    <span class="fs-4" markdown="1">
        [GraphQL >](./graphql){: .btn .btn-purple }
    </span>
</div>

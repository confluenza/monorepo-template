# Contributing

> Working on your first Pull Request? You can learn how from this *free* series
> [How to Contribute to an Open Source Project on
> GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Quick start

After you clone your forked repo, follow the following steps to bootstrap your local environment:

```bash
» yarn
» (cd workspaces/homepage && yarn develop)
```

## Code organization

This template is a monorepo. It consists of a number of packages that all live under the `workspaces` folder.

## Workspaces

Confluenza Monorepo Template provides two demo workspaces - `demo-workspace-1` and `demo-workspace-2` - and `homepage`. The `homepage` workspace is the workspace containing your project landing page and documentation browser.

### homepage

This is a Gatsby site that uses `gatsby-theme-confluenza`. Thus, it is still a regular Gatsby site, so you can do whatever Gatsby supports. New to Gatsby? Visit [Gatsby website](https://www.gatsbyjs.com/).

### demo-workspace-1 and demo-workspace-2

Demonstration workspaces to show that Confluenza makes it easy to make the documentation of every workspace accessible.

## Installing dependencies

We install all mono-repo dependencies with single top-level `yarn`. 

## Staying in sync with upstream

You can follow the steps described in [Syncing a
fork](https://help.github.com/articles/syncing-a-fork/). We recommend that you
keep your local master branch pointing to the upstream master branch. Remaining
in sync then becomes really easy:

```bash
git remote add upstream https://github.com/confluenza/monorepo-template.git
git fetch upstream
git branch --set-upstream-to=upstream/master master
```

Now, when you do `git pull` from your local `master` branch git will 
fetch changes from the `upstream` remote. Then you can make all of 
your pull request branches based on this `master` branch.

## Submitting a Pull Request

Please go through existing issues and pull requests to check if 
somebody else is already working on it, we use `someone working on it` label to mark such issues.

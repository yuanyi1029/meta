# Week 3 Notes

# Git vs GitHub
Git - Version control system for tracking changes to projects 

GitHub - Cloud-based hosting service provided by Microsoft to manage Git repositories from a user interface

<hr>

Git commands:
```
git init        // initialise a folder as a git repository
git clone       // clones a gitt repository
git add         // stages files for tracking
git commit      // saves tracked files as snapshots
git push        // pushes changes of a local repository up to the server 
git pull        // downloads latest version of a repository
git status      // shows repository status 
git diff        // shows difference of a file from the previous version
git log         // shows push history of a repository 
git blame       // shows line by line the last modified author and date of a file in a repository
```

## Git Branching 
Git branches allows working on different parts of a repository at the same time, where Git branches can be merged together once each of the branches are completed.

Repositories may have these branches: 
- Main branch (Default branch. Contains updated, stable version of the code)
- Feature branch (Non-default branch. May contain code for new features)

Git commands involving branching:
```
git branch           // shows all available branches in a repository
git checkout -b      // creates a new branch and switches to it
git checkout master  // switches to the master branch
git merge            // merges a branch to the master branch                 
```

Creating a new branch:
```
git checkout -b newbranch
git add . 
git commit -m 'update'
git push -u origin newbranch
```

## Remote vs Local
When initialising a Git repository locally, it is necessary to point the local repository to a remote repository on a GitHub server.

Example:
```
git init                    // initialise a git repository
git remote -v               // checks a repository's remote origin (should be empty)
git remote add origin url   // adds a remote origin, where url is a remote repository's url 
git remote -v               // checks a repository's remote origin (should now have a remote repository's url)
```

## Git Forking 
Git forking allows users to copy a repository into their GitHub accounts which enables users to clone the forked repository into their computer and make changes. Cloning, pulling and pushing will all have the forked repository as its origin and not the original repository. A pull request can be sent to the original repository, where the repository owner can review the proposed changes and merge the user's code with the original repository.

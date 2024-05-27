# Git and GitHub

[YouTube Video](https://www.youtube.com/watch?v=VJm_AjiTEEc&t=33s&ab_channel=VladMishustin)

### From Wikipedia:

Git is a distributed version control software that can be used from a command-line interface, created by Linus Torvalds in 2005. Git was created to be a simple tool to facilitate the development of the Linux kernel and has become one of the most widely used version control tools.

### Git:

- Tracks all file changes
- Remembers who, what, when, comments...
- Allows you to revert to previous file versions (commits)
- Allows you to create branches to develop features without disrupting the main branch (master/main)

Git is a free software useful for version control. Mainly, it is used through the terminal. [Official website](https://git-scm.com/)

GitHub is a web application that allows you to upload files from the PC (local) to the cloud. Practically, it allows you to back up files accessible to anyone from anywhere.

Repository = directory controlled by Git with all its child directories.

- Local is the one on the computer
- Remote is the one in the cloud uploaded from local

---

## Installation and Setup of Git

### 1. Download and Install Git

Download and install Git from [here](https://git-scm.com/download/win).

### 2. Configuration

Add Username and Email.
Open the terminal:

```sh
git config --global user.name "your-name-here"
git config --global user.email "yourmail@mail.com"
```

### 3. Create Local Repository

In the terminal, open the directory you want to turn into a repository:

```sh
git init
```

### 4. Create Remote Repository

Go to [GitHub](https://github.com/) and create a new repository.

### 5. Connect Local to GitHub

Using a terminal, enter the local repository:

```sh
git remote add origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/YOUR_REPO.git
```

To remove or replace the remote repository:

```sh
git remote remove origin
git remote set-url origin git://new.url.here
```

### 6. Download a copy from remote

Enter the folder where you want to download the copy:

```sh
git clone https://YOUR_TOKEN@github.com/YOUR_USERNAME/YOUR_REPO.git
```

### 7. Commit

```sh
git status
```

Shows the status of all unsaved (uncommitted) file changes in the repository.

```sh
git add [file/folder name]
```

Add files to the staging area (index).

```sh
git commit -m "your message"
```

Create a checkpoint with that version.

```sh
git log
```

Shows info of all commits in chronological order.

```sh
git checkout [commit hash]
```

Revert to an old commit.

```sh
git reset --hard head
```

Revert to the previous commit.

### 8. Upload online

```sh
git push origin main
```

Publish commits from local to remote.

```sh
git pull origin main
```

Download all commits from that remote repository branch not yet in the local repository.

### 9. Git Branches

A Git branch is a sequence of commits with its own name. It is usually used to add a feature that might cause conflicts.

```sh
git branch
```

Shows the list of available local branches.

```sh
git branch [branch name]
```

Create a new branch.

```sh
git checkout [branch name]
```

Switch to that local branch.

```sh
git push origin [branch name]
```

Push that branch to the remote.

### 10. Merging branches

Once the feature is ready, tested, and working, you need to merge that branch into the master branch.

```sh
git merge [branch name]
```

Merge that branch into the current branch.

```sh
git rebase [branch name]
```

Move all commits from that branch to the current branch.

### 11. Update name

```sh
git branch -m main master
git fetch origin
git branch -u origin/master master
git remote set-head origin -a
```

### 12. Delete Local Branch

```sh
git branch -d <branch name>
```

### Note:

Create a `.gitignore` file inside the project directory to specify files to be ignored by Git. One per line.

```sh
# Example .gitignore
node_modules/
.DS_Store
```

## Advanced Git Commands

### Stash Changes

Temporarily stashes changes that are not ready to be committed: `git stash`
Apply stashed changes: `git stash apply`
List all stashes: `git stash list`
Drop a specific stash: `git stash drop stash@{n}`

### Revert a Commit

Revert a specific commit by creating a new commit: `git revert [commit hash]`

### Amend a Commit

Amend the previous commit with new changes: `git commit --amend`

### Cherry-pick a Commit

Apply a commit from another branch: `git cherry-pick [commit hash]`

### Squash Commits

Squash multiple commits into one: `git rebase -i [commit hash]`

### Show Changes

Show changes between commits, commit and working tree, etc.: `git diff`
Show changes for a specific file: `git diff [file]`

### Tagging

Create a new tag: `git tag -a v1.0 -m "version 1.0"`
List all tags: `git tag`
Push tags to remote: `git push origin --tags`

### Clean Untracked Files

Remove untracked files from the working tree: `git clean -f`
Remove untracked directories: `git clean -fd`

### Bisect

Use binary search to find the commit that introduced a bug: `git bisect start`, `git bisect bad`, `git bisect good [commit]`

### Reflog

Show a log of all the references (HEAD, branches, etc.): `git reflog`

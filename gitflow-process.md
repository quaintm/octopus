# Get latest from develop
git checkout develop
git pull --rebase

# rebase develop into your feature branch
git checkout feature/my-feature
git rebase develop --preserve-merges

# merge feature into develop
git checkout develop

# DO ONLY ONE of the 2 options below
# if you only have one or (maybe) 2 commits in your feature branch
git merge feature/my-feature

# OR
# this forces an empty merge commit (useful if we need to roll things back)
git merge --no-ff feature/my-feature

# if you use Github, this should also close the pull request
git push origin develop
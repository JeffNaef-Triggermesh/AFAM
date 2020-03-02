#git_comit.sh
#example use : 

#chmod u+x git_comit.sh 
#./git_comit.sh "this is a git_comit description that will be submitted with my github updates"
# "" are not optional 

#!/bin/sh
 
FIRST_ARGUMENT="$1"

cd ../
ls
git add .
git git_comit -m $1 
git status
git commit -m "$1" 
git push origin master

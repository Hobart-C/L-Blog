# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m '提交master'

git push -f git@github.com:Hobart-C/L-Blog.git


# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io

# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Hobart-C/L-Blog.git master:docs
exec /bin/bash

cd -


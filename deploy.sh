rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin https://github.com/xixixiaoyu/vue3-yun-ui-website.git &&
git push -f -u origin main &&
cd - &&
echo https://xixixiaoyu.github.io/vue3-yun-ui-website/#/

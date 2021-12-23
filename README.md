# KYC

# NPM INStalls

npm i --save-dev @supabase/supabase-js @mui/material @emotion/react @emotion/styled moment react-router-dom @testing-library/react @mui/icons-material yup formik nyc eslint eslint-config-prettier eslint-plugin-prettier prettier eslint-plugin-testing-library @material-ui/core msw

# ES Lint

npx eslint --init

# Prettier config:

update eslintrc.json to extend:

        "plugin:prettier/recommended"

# Create .prettierrc

{
"semi": true,
"tabWidth": 2,
"printWidth": 100,
"singleQuote": true,
"trailingComma": "none",
"jsxBracketSameLine": true
}

# Update package.json

"lint": "eslint .",
"lint:fix": "eslint --fix",
"format": "prettier --write './\*_/_.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"

# Mock Service Worker MSW

npx msw init public --save

# Git Stuff

git init
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/gitChrisMoore/maestro.git
git push -u origin main

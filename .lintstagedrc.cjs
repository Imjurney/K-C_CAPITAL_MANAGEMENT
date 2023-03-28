module.exports = {
  '**/*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit'],
  '**/*.{js,jsx,cjs,json,ts,tsx}': ['eslint --cache --fix', 'prettier --write'],
};

## tailwind css @1.9


### Init 

```
npm init -y

&&

npm install tailwindcss
```

### tailwind config

```
npx tailwindcss init --full
```
- this will generate `tailwind.config.js` file under root dir 
- `--full` means to include every default setting 

#### To generate an empty tailwind config:

```
npx tailwindcss init
```
- this is used to extend the default config


Note: need to rebuild the css after modifying the config file


### Build css

```
npm run build-css

(tailwindcss build src/styles.css -o public/styles.css)
```
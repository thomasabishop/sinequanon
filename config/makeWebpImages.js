const imagemin = require('imagemin'); 
const webp = require('imagemin-webp'); 

imagemin( ['src/images/rasters/*.{jpg,png}'], {
    destination: 'src/images/webp',
    plugins: [
        webp()
    ]
});
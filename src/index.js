import '@/styles/styles.css'
import '@/styles/styles.scss'
import romanArch from '@/images/roman-arch.jpg'
import sqnLogo from '@/images/sqn-logo.svg'

/* Test HTML insertion */

// Create entry point
const app = document.getElementById('root')

const main = document.createElement('div')
main.classList.add('main')
app.append(main)
const header = document.createElement('header')
header.innerHTML = `
    <h1>Sine Qua Non</h1>
    <p>✅ SQN running successfully!</p>
`
main.append(header)

/* Test raster image insertion */

const rasterImage = document.createElement('img')
rasterImage.setAttribute('src', romanArch)
rasterImage.classList.add('image')
main.append(rasterImage)

/* Test vector image inline insertion */

const vectorImage = document.createElement('img')

vectorImage.setAttribute('src', sqnLogo)

vectorImage.classList.add('image')
main.append(vectorImage)

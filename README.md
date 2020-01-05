# Screenshot-Translator
 Translates Japanese from a screenshot (language can be changed).
 Simply screen capture whatever you want to translate (windows + shift + s or snipping tool works best) then paste on the page and it will translate automatically.
 The screenshot has to be pretty small as tesseract refuses large payloads, might fix this later.

 I used Tesseract-JS (https://github.com/naptha/tesseract.js) as an OCR to transfer the text from an image in the clipboard to characters, then sent it to the Yandex translation API to translate.
 The Yandex API I used isn't very accurate so I might change to google at some point.

 ## Run
 First install with 'npm i' then run with 'npm start'

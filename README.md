# Spelling With Phone Numbers

Every number typed on an input in the browser, corresponds to a combination of letters - like in the old mobile phones where each number corresponds to 3 or 4 letters. 

![Phone Keyboard](./phonekeyboard.png)

From the combinations generated it will get suggestions that gets appended to the page. The suggestions come from a lib, which imports a dictionary of english words.
Example:
- Input: 8733
- Output: ["tree","tref","urde","used","usee"]

### To run server locally
```bash

#install server dependencies:
npm install

#run server
npm start

#check on browser:
http://localhost:3000

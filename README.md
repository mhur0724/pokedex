Hello! This is a Pokedex I made to focus on making a JS project that interacts with an API. I didn't focus too much on the styling of this since I wanted to demonstrate my ability to use JS so it is not responsive and only maintains one size.

The pokedex will provide information (description, stats, and evolution forms) of the specific pokemon requested. It takes either the name or the Id of the pokemon (i.e "Bulbasaur" or "1"). For the most part entering any name should work, but the data from the api can occasionally have extra information ("Zacian-Hero" id:888). However, entering any ID will provide you with the correct pokemon. You can also cycle through the pokemon by clicking the arrow keys on the pokedex or using the arrow keys on your keyboard. 

From this project I was better able to understand using Fetch API and I also now better understand why it's some important to break down big functions into smaller ones. Additionally, I learned how to use a debugger as I was just using console.log to try and debug my code, but that quickly became very confusing.

Features: 
Calls to Fetch API.
Dynamically changing stats bars.
Ability to call a pokemon by name or Id.
Displays 

One small bug that I can't seem to resolve is in the evolution image section. It seems to occasionally mix up the order of the evolution display. I'm unsure what the direct trigger is for this, however you can try and replicate it by cycling through one evolution cycle ("Bulbasaur -> "Ivysau" -> "Venasaur"). My hunch is that I need to use async/await somewhere in the code but I'll need to look into this more. If you have any suggestions or can spot what I'm missing please let me know!

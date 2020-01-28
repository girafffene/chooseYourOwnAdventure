alert("Choose Your Own Story")

var name = prompt("Hi friend, what is your name?")

if (name) {
  alert(
    `Hi ${name}, thank you for choosing to play my game. Rules are simple, you enter one of the choices provided. If you don't follow the rules you will get kicked out. Enjoy!`
  )
} else {
  alert(
    "So we have a smart-ass... That's fine, I didn't wanna play with you anyways!"
  )
  stop()
}

alert(
  "It's a cool October night, the ghouls are coming out out to play. Scared, you run into the first door you see. You're led to a dimly-lit room. Lights flickering, screaming and cries outside shred your ears. You see a table in front of you with three items laid out: a vial of Magic Salve; fangs, which slightly remind you of a chattering teeth toy; and a pet rock by the name of Steve."
)

var a = "Magic Salve"
var b = "Fangs"
var c = "Pet Rock"

var choice = prompt(
  `Which item would you like to inspect? (a) ${a}, (b) ${b} (c) ${c}`
)

if (choice === "a") {
  salve()
} else if (choice === "b") {
  fangs()
} else if (choice === "c") {
  rock()
} else {
  stop()
}

function salve() {
  alert(
    "You pick up the Magic Salve just as someone walks in; panicked you slip it in your pocket and walk out."
  )

  alert("It's getting late, you decide to go home.")

  alert(
    "On the walk home you start to feel a bit parched. Without any thought, you crack open the vial and drink it all."
  )

  alert(
    "... *oof* You're starting to feel dizzy ... You try to scream for help but you feel you can't talk... You fall down, onto the floor, dazed."
  )

  alert(
    "You awake, groggy, your head is pounding; then you remember you and your mom had a lunch date set up. You scurry back home to get ready."
  )

  var stew = "stew surprise"
  var hd = "hotdog"

  alert(
    `You and your mom have gotten together, you're sitting down, catching up. Telling her how life has been since you moved out. As you're talking, the waitress heads over to hand you a menu. Excitedly you start to look through the menu but the waitress stops you, "Sorry, our menu is actually really scarce right now. All we have is ${stew} and ${hd}s."`
  )

  var food = prompt(
    `Your mom looks over, "Which will you have, sweetie, the ${stew} or the ${hd}?"`
  )

  if (food === "hot dog") {
    alert(`"I\'ll have the ${hd}," you tell the waitress.`)

    alert(
      `You and your mom patiently wait for your food to arrive, your hunger growing more and more with time. "Man," you tell your mom, "I'm so hungry I could eat a human!"`
    )

    alert(
      "Finally, the food has arrived. You scarf your food down and feel your hunger satisfied. So much so, that you decide to go home for a quick nap before your Halloween party tonight."
    )
  } else if (food === "stew surprise") {
    alert(`"I\'ll have the ${stew}," you tell the waitress.`)

    alert(
      `You and your mom patiently wait for your food to arrive, your hunger growing more and more with time. "Man," you tell your mom, "I'm so hungry I could eat a human!"`
    )

    alert(
      "The food has finally arrived! You're in such a rush to pick up the spoon that you accidentally cut yourself with the silver knife on the table..."
    )

    alert(
      `You look at your mom, your heart starting to feel slow and heavy... "I love--," your final breath caught you. You didn't realize you were turning into a werewolf and just killed yourself ...`
    )

    end()
  } else {
    stop()
  }

  alert(
    "You wake up, hours later, realizing you don't have a costume for your party."
  )

  var party = "Party City"
  var create = "create"

  var costume = prompt(`Do you go to ${party} OR ${create} your own at home?`)

  if (costume === "party city") {
    alert(
      `You decided to go to ${party}. As you're going about your day, everyone seems to be complimenting you on your costume. Puzzled, you look into the mirror to see that you're now a werewolf! You hurry home, throw on a flannel, and hope everyone continues to think that it's but a costume.`
    )
  } else if (costume === "create") {
    alert(
      "You don't seem to have much at home except for a cat ears headband and black eye-liner. You draw in whiskers and throw on that headband and head out to the party."
    )
  } else {
    stop()
  }

  alert("Now that we have our costume in order, we can head out to the party!")

  alert(
    "At the party, you see your friends and immediately start socializing with them. You all have a couple drinks, play a few games. You'\re enjoying yourself so much that you don'\t even realize that the time to pick out the Best Costume hs arrived."
  )

  alert(
    "You'\ve been selected for the Best Costume award. As they are getting ready to take the picture, the full moon rises, you drop to the floor and trasnform. Scared, your friends have turned on you and are now trying to kill you."
  )

  var run = "run"
  var kill = "kill them all"

  var finalDecision = prompt(
    `Think quick! Do you ${run} off, hoping you'll survive or do you ${kill}?`
  )

  if (finalDecision === "run") {
    alert(
      "You chose to run, smart one. Running, you find a small cabin. At this point, you enter, thinking 'What do I have to lose?'"
    )
    alert(
      'Inside, you find a group of people. You feel safe, at home. "Welcome, brother, we\'ve been waiting for you."'
    )
    alert(
      "At this time, you realize that you are one of them so you decide to stay and make home with them."
    )
    happyEnding()
  } else if (finalDecision === "kill") {
    alert(
      "You've chosen to kill everyone off. What you hadn't realized is that someone was calling 911 while you were transitioning so SWAT comes swooping in and you are overpowered and killed with a single silver bullet to the head."
    )
    end()
  }
}

function fangs() {
  alert(
    "You pick up the fangs just as someone walks in; panicked you slip it in your pocket and walk out."
  )

  alert("It's getting late, you decide to go home.")

  alert(
    "On the walk home you start to feel a bit bored. Without any thought, you pull the fangs out of your pocket and start playing with them. One of the fangs nipped you and you start bleeding a little. You think nothing of this..."
  )

  alert(
    "... *oof* You're starting to feel dizzy ... You try to scream for help but you feel you can't talk... You fall down, onto the floor, dazed."
  )

  alert(
    "You awake, groggy, your head is pounding; then you remember you and your mom had a lunch date set up. You scurry back home to get ready."
  )

  var spaghetti = "spaghetti and meatballs"
  var pasta = "chicken Alfredo with garlic bread"

  alert(
    `You and your mom have gotten together, you're sitting down, catching up. Telling her how life has been since you moved out. As you're talking, the waitress heads over to hand you a menu. Excitedly you start to look through the menu but the waitress stops you, "Sorry, our menu is actually really scarce right now. All we have is ${spaghetti} and ${pasta}."`
  )

  var food = prompt(
    `Your mom looks over, "Which will you have, sweetie, the ${spaghetti} or the ${pasta}?"`
  )

  if (food === "spaghetti") {
    alert(`"I\'ll have the ${spaghetti}," you tell the waitress.`)
    alert(
      `You and your mom patiently wait for your food to arrive, your hunger growing more and more with time. "Man," you tell your mom, "I'm so hungry I could eat a human!"`
    )
    alert(
      "Finally, the food has arrived. You scarf your food down and feel your hunger satisfied. So much so, that you decide to go home for a quick nap before your Halloween party tonight."
    )
  } else if (food === "pasta") {
    alert(`"I\'ll have the ${pasta}," you tell the waitress.`)

    alert(
      `You and your mom patiently wait for your food to arrive, your hunger growing more and more with time. "Man," you tell your mom, "I'm so hungry I could eat a human!"`
    )
    alert(
      "The food has finally arrived! You're in such a rush to eat, you grab the garlic bread and take a HUGE bite out of it."
    )
    alert(
      `You look at your mom, your heart starting to feel slow and heavy... "I love--," your final breath caught you. You didn't realize you were turning into a vampire and just killed yourself ...`
    )
    end()
  } else {
    stop()
  }

  alert(
    "You wake up, hours later, realizing you don't have a costume for your party."
  )

  var party = "Party City"
  var create = "create"

  var costume = prompt(`Do you go to ${party} OR ${create} your own at home?`)

  if (costume === "party city") {
    alert(
      `You decided to go to ${party}. As you step outside you realize that the sun is starting to burn your skin. Confused, you stay in and make your own costume. You find a cape sitting in the back your closet. You throw that on and leave.`
    )
  } else if (costume === "create") {
    alert(
      "You don't seem to have much at home except for a cat ears headband and black eye-liner. You draw in whiskers and throw on that headband and head out to the party."
    )
  } else {
    stop()
  }

  alert("Now that we have our costume in order, we can head out to the party!")

  alert(
    "At the party, you see your friends and immediately start socializing with them. You all have a couple drinks, play a few games. You'\re enjoying yourself so much that you don'\t even realize that the time to pick out the Best Costume hs arrived."
  )

  alert(
    "You'\ve been selected for the Best Costume award. As they are getting ready to take the picture, you head to the center of the room. Once you're picture has been taken, everyone is taken aback..."
  )

  alert(
    "You're not showing up in the picture. Scared, your friends have turned on you and are now trying to kill you."
  )

  var run = "run"
  var kill = "kill them all"

  var finalDecision = prompt(
    `Think quick! Do you ${run} off, hoping you'll survive or do you ${kill}?`
  )

  if (finalDecision === "run") {
    alert(
      "You chose to run, smart one. Running, you find a small cabin. At this point, you enter, thinking 'What do I have to lose?'"
    )
    alert(
      'Inside, you find a group of people. You feel safe, at home. "Welcome, brother, we\'ve been waiting for you."'
    )
    alert(
      "At this time, you realize that you are one of them so you decide to stay and make home with them."
    )
    happyEnding()
  } else if (finalDecision === "kill") {
    alert(
      "You've chosen to kill everyone off. What you hadn't realized is that someone wrote books about vampires and knows exactly how to kill them... It's your best friend, she calls out your name and as you turn around she jams a stake into your heart."
    )
    end()
  }
}

function rock() {
  alert(
    "You pick up Steve the pet rock just as someone walks in; panicked you slip it in your pocket and walk out."
  )

  alert("It's getting late, you decide to go home.")

  alert(
    "On the walk home you pass by a lake. There are a bunch of kids laughing, skipping rocks."
  )

  var toss = "toss"
  var keep = "keep"

  var rockChoice = prompt(
    `Seems kind of fun, will you take Steve and ${toss} him into the lake or ${keep} him and add him to your rock collection`
  )

  if (rockChoice === "toss") {
    alert(
      "You tossed Steve out into the lake, watching all the pretty ripples."
    )
    happyEnding()
  } else if (rockChoice === "keep") {
    alert(
      "You decided to keep Steve and add him to your collection. You head home, happy as can be."
    )
    happyEnding()
  } else {
    stop()
  }
}

function stop() {
  alert("You didn't follow the rules, closing out now.")
  break
}

function end() {
  alert(
    "You have been killed off, this is the end of your story. Good Bye! Thanks for playing."
  )
  break
}

function happyEnding() {
  alert("You've finished the game, all is well. Thanks for playing!")
  break
}

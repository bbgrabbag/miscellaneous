#Expanding/retracting border technique#

*About*
-Practice exercise using React to generate a constant expanding and retracting border radius around a div, turning it from a square to a circle in a constant cycle.

*Purpose*
-Wanted to improve dynamic styling skills within the React library

*Solution*
-Used setInterval to constantly update state of box component. Adjusted the border radius property based on the value of prevState.radius and prevState.isInc properties. Set styling accordingly

*Challenges*
-Originally used CSS transition together with a setInterval which toggled the box's state of border radius between 0 and 50 at a rate which matched the css transition time variable. I couldnt get it to sync very well and I didn't like having to adjust the timing in more than one place. My solution gives me more control over speed and duration of change, except it remains a linear change.


# airportjstdd
Airport TDD Challenge: JavaScript
-----

User Stories
-----
Completed:
-----
As an air traffic controller 
So I can get passengers to a destination 
I want to instruct a plane to land at an airport

As an air traffic controller 
So I can get passengers on the way to their destination 
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller 
To ensure safety 
I want to prevent landing when the airport is full 

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

-----

Not yet completed:
-----

As an air traffic controller 
To ensure safety 
I want to prevent takeoff when weather is stormy 

As an air traffic controller,
To ensure safety 
I want to prevent landing when weather is stormy 

-----

Write up on learning a new language
----

I found that in trying to learn JS this week, that the best place was finding equivalents between the 2 languages. I spent most of the first morning listing ruby items or processes, and then googling for how to do those same things in JS.
I found a few posts on SO and w3s that were helpful.
After that, it was just a matter of practice. Typing the code out over and over is the only way I seem to get it to stick, and I still usually need to check my syntax repeatedly, but I definitely feel more comfortable with it now.

Really I think I learn more quickly by just doing something with a code and messing around with it to see what works. I spent a morning refactoring the thermostat code that I had done in the previous days pairing, and that was when it started to click more. I tried to remove all magic numbers from the code and the tests, to make it more flexible (say if someone wanted a thermostat with a higher maximum temp) so that tests wouldn’t need to be changed at all if any of the parameters were changed. It worked, though it was a bit ugly.
For learning new languages in the future I think I’d follow a similar path; check how the 2 codes compare in doing similar things, then try to write something in the new language, and expand that, adding new features from the new language as I pick it up.

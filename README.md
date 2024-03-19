In cookie-server-action I made a simple application where depending on if you press the setCookie button you would do a server action to setState.
Then what suprised me was how getCookie was automatically called. I just can't seem to figure out why.
I would prefer to call it myself since it gives me more control and also is useful for my usecase where I just use setCookie to change theme for next page load but don't need to get it again sense I know what value I just set it to.

In cookie-server-action2 I tried to see if it was changing because state was changing and stuff but I still can't seem to figure it out.

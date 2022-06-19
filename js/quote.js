const quotes = [
    {
        lyrics : "But don't look back in anger, don't look back in anger , I heard you say At least not today ..." ,
        artist : "Oasis - Don't look back in anger" ,
    } ,
    {
        lyrics : " Because maybe , You're gonna be the one that saves me . And after all, You're my wonderwall" ,
        artist : "Oasis - Wonerwall" ,
    } ,
    {
        lyrics : " You may say I'm a dreamer But I'm not the only one , I hope someday you'll join us And the world will live as one " ,
        artist : "John-Lennon - Imagine" ,
    } ,   
    {
        lyrics : " Yesterday, all my troubles seemed so far away Now it looks as though they're here to stay, Oh, I believe in yesterday" ,
        artist : " The Beatles - Yesterday" ,
    } ,   
    {
        lyrics : " Hey Jude, don't make it bad Take a sad song and make it better Remember to let her into your heart Then you can start to make it better" ,
        artist : " The Beatles - Hey Jude" ,
    } ,   
    {
        lyrics : " And as we wind on down the road Our shadows taller than our soul. There walks a lady we all know, Who shines white light and wants to show" ,
        artist : " Led Zepplin - Stairway To Heaven" ,
    } ,
    {
        lyrics : " And then I tell her, as I turn out the light. I say, 'My darling, you were wonderful tonight. Oh my darling, you were wonderful tonight.'" ,
        artist : " Eric Clapton - Wonderful Tonight" ,
    } ,
    {
        lyrics : " Would you know my name If I saw you in heaven? Would it be the same If I saw you in heaven? I must be strong. And carry on. Cause I know, I don't belong Here in heaven" ,
        artist : " Eric Clapton - Tears in Heaven" ,
    } ,
    {
        lyrics : " Hello, Is there anybody in there? Just nod if you can hear me? Is there anyone at home?" ,
        artist : " Pink Floyd - Comfortably Numb" ,
    } ,
    {
        lyrics : " We are the champions, my friends. And we'll keep on fighting 'til the end, oh . We are the champions. We are the champions",
        artist : " Queen - We Are the Champions" ,
    }    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[0-9]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.lyrics;
author.innerText = todaysQuote.artist;

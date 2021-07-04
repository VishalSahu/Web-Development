const tweetsform = document.querySelector('#tweetform');
const tweetlist = document.querySelector('#tweets');

tweetsform.addEventListener('submit',function(e)
{
    e.preventDefault();
    const usernameInput =  tweetsform.elements.username;
    const tweetInput =  tweetsform.elements.tweet;
    addTweet(usernameInput.value,tweetInput.value);
    usernameInput = '';
    tweetInput = '';
});

const addTweet = (username, tweet) =>
{
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    newTweet.append(`${tweet} - `)
    newTweet.append(bTag);
    bTag.append(username);
    tweetlist.append(newTweet);
}
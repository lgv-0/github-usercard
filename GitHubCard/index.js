/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "keyeric",
  "tdefriess",
  "M-PAW",
  "guidra-rev",
  "Rzv0000"
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

Element.prototype.setLastAttr = function(s_Key, s_Value)
    {
        this.children[this.children.length - 1].setAttribute(s_Key, s_Value);
    };

function BuildCard(o_Data)
{
  let Card = document.createElement("div");
  Card.setAttribute("class", "card");

  Card.appendChild(document.createElement("img"));
  Card.setLastAttr("src", o_Data["avatar_url"]);

  ///////////////////////////
  let CardInfo = document.createElement("div");
  CardInfo.setAttribute("class", "card-info");
  
  CardInfo.appendChild(Object.assign(document.createElement("h3"), {"innerText":o_Data["name"]}));
  CardInfo.setLastAttr("class", "name");

  CardInfo.appendChild(Object.assign(document.createElement("p"), {"innerText":o_Data["login"]}));
  CardInfo.setLastAttr("class", "username");

  CardInfo.appendChild(Object.assign(document.createElement("p"), {"innerText":`Location: ${o_Data["location"]}`}));

  CardInfo.appendChild(Object.assign(document.createElement("p"), {"innerText":"Profile: "}));
  CardInfo.children[CardInfo.children.length - 1].appendChild(Object.assign(document.createElement("a"), {"innerText":o_Data["login"]}));
  CardInfo.children[CardInfo.children.length - 1].setLastAttr("href", o_Data["html_url"]);

  CardInfo.appendChild(Object.assign(document.createElement("p"), {"innerText":`Followers: ${o_Data["followers"]}`}));

  CardInfo.appendChild(Object.assign(document.createElement("p"), {"innerText":`Following: ${o_Data["following"]}`}));

  CardInfo.appendChild(Object.assign(document.createElement("p"), {"innerText":`Bio: ${o_Data["bio"]}`}));

  ///////////////////////////
  Card.appendChild(CardInfo);

  return Card;
}

axios.get("https://api.github.com/users/lgv-0").then((response) =>
  {
    document.getElementsByClassName("cards")[0].appendChild(BuildCard(response.data));
  });

for (let i = 0; i < followersArray.length; i++)
  axios.get("https://api.github.com/users/" + followersArray[i]).then((response) =>
  {
    document.getElementsByClassName("cards")[0].appendChild(BuildCard(response.data));
  });

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

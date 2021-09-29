
let dogVotes = localStorage.getItem('dog-votes')
let catVotes = localStorage.getItem('cat-votes')
let fishVotes = localStorage.getItem('fish-votes')

//get all animal sections
let animals = document.querySelectorAll(".animal")

//isolate the vote count for the dog in the voting table
let dogVotesCell = document.querySelector("#doggo-votes")

if (dogVotes) {
    dogVotesCell.textContent = dogVotes;
}

//create dog vote button
let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "Vote for Doggo"

//Now, we're adding this event listener
dogVoteBtn.addEventListener('click', function (e) {
    let dogVotesCount = parseInt(dogVotesCell.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;
    localStorage.setItem('dog-votes', dogVotesCount);
});

animals[0].append(dogVoteBtn)

//isolate the vote count for the cat in the voting table
let catVotesCell = document.querySelector("#catto-votes")

if (catVotes) {
    catVotesCell.textContent = catVotes;
}

//create cat vote button
let catVoteBtn = document.createElement("button")
catVoteBtn.textContent = "Vote for Catto"

//Now, we're adding this event listener
catVoteBtn.addEventListener('click', function (e) {
    let catVotesCount = parseInt(catVotesCell.textContent);
    catVotesCount = catVotesCount + 1;
    catVotesCell.textContent = catVotesCount;
    localStorage.setItem('cat-votes', catVotesCount);
});

animals[1].append(catVoteBtn)

//isolate the vote count for the fish in the voting table
let fishVotesCell = document.querySelector("#fish-votes")

if (fishVotes) {
    fishVotesCell.textContent = fishVotes;
}

//create fish vote button
let fishVoteBtn = document.createElement("button")
fishVoteBtn.textContent = "Vote for Fish Gold"

//Now, we're adding this event listener
fishVoteBtn.addEventListener('click', function (e) {
    let fishVotesCount = parseInt(fishVotesCell.textContent);
    fishVotesCount = fishVotesCount + 1;
    fishVotesCell.textContent = fishVotesCount;
    localStorage.setItem('fish-votes', fishVotesCount);
});

animals[2].append(fishVoteBtn)


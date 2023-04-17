let pronoun = ['the','our', 'my', 'her'];
let adj = ['great', 'big', 'huge', 'beautiful', 'tiny', 'stunning' ];
let noun = ['jogger','racoon', 'dog', 'cat', 'car','garden','flower'];
let domain = [ ".com", ".net", ".co.uk"]

for (let i =0; i < pronoun.length;i++){
    for (let x=0; x < adj.length; x++){
        for (let boh = 0; boh < noun.length; boh++){
            for (let y = 0; y < domain.length; y++){
                console.log(pronoun[i]+ adj[x]+ noun[boh]+ domain[y])
            }
        }
    }
}
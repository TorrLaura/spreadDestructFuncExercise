const jPDinos = [
    "Velociraptors", 
    "Tyrannosaurus Rex", 
    "Dilophosaurus"
];
console.log(jPDinos);

function seeDinos (a, ...b){
    console.log(a);
    console.log(b);
    
}
seeDinos(...jPDinos);

const JPCharacters = {
    alanGrant: "Sam Neill", 
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}

seeCharacters(JPCharacters);

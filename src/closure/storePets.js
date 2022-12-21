function createPetList() {
    let petList = [];
    function addPet(pet) {
        if (pet) {
            // count = petList.push(pet)
            petList.push(pet)

        } 
        // console.log(`Pet list: ${petList} and threre are: ${count}`);
        console.log(petList);
    }
    return addPet;
}

const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();


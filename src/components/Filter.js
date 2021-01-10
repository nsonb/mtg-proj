import React, {useState, useEffect, useContext} from 'react';
import DropDownMenu from './DropDownMenu';
import { CardsContext } from '../context/CardContext';

const Filter = () => {
    const def = "All";
    const { setCardsWithParam } = useContext(CardsContext)
    // list of types
    const types = ["All","Artifact","Autobot","Card","Character","Conspiracy","Creature","Dragon","Elemental","Enchantment","Goblin","Hero","instant","Instant","Jaguar","Knights","Land","Phenomenon","Plane","Planeswalker","Scheme","Sorcery","Specter","Summon","Tribal","Vanguard","Wolf"];
    const subtypes = [
        "Abian","Adventure","Advisor","Aetherborn","Ajani","Alara","Alicorn",
        "Alien","Ally","Aminatou","and/or","Angel","Angrath","Antelope","Ape",
        "Arcane","Archer","Archon","Arkhos","Arlinn","Art","Artificer","Ashiok",
        "Assassin","Assembly-Worker","Atog","Aura","Aurochs","Autobot","Avatar",
        "Azgol","Azra","Baddest,","Badger","Barbarian","Basilisk","Basri","Bat",
        "Bear","Beast","Beaver","Beeble","Beholder","Belenon","Berserker","Biggest,",
        "Bird","Boar","B.O.B.","Bolas","Bolas’s Meditation Realm","Bot","Brainiac",
        "Bringer","Brushwagg","Bureaucrat","Calix","Camel","Carrier","Cartouche",
        "Cat","Centaur","Cephalid","Chameleon","Chandra","Chicken","Child","Chimera",
        "Citizen","Clamfolk","Cleric","Cloud","Cockatrice","Construct","Contraption",
        "Cow","Crab","Crocodile","Curse","Cyborg","Cyclops","Dack","Daretti","Dauthi",
        "Davriel","Deer","Demigod","Demon","Desert","Designer","Devil","Dinosaur",
        "Djinn","Dog","Dominaria","Domri","Donkey","Dovin","Dragon","Drake","Dreadnought","Drone",
        "Druid","Dryad","Duck","Dungeon","Dwarf","Efreet","Egg","Elder","Eldrazi","Elemental","Elemental?","Elephant",
        "Elf","Elk","Elspeth","Elves","Equilor","Equipment","Ergamon","Estrid","Etiquette","Eye",
        "Fabacin",
        "Faerie","Ferret","Fire","Fish","Flagbearer","Food","Forest","Fortification","Fox","Freyalise","Frog",
        "Fungus","Gamer","Gargoyle","Garruk","Gate","Giant","Gideon","Gnome","Goat","Goblin","God","Golem","Gorgon","Grandchild","Gremlin","Griffin","Gus","Hag","Harpy",
        "Hatificer","Head","Hellion","Hero","Hippo","Hippogriff","Homarid","Homunculus","Horror","Horse","Huatli","Human","Hydra","Hyena","Igpay","Illusion","Imp",
        "Incarnation","Innistrad","Insect","Inzerva","Iquatana","Ir","Island","Jace","Jackal","Jaya","Jellyfish","Jeska","Juggernaut","Kaldheim","Kamigawa",
        "Kangaroo","Karn","Karsus","Kasmina","Kavu","Kaya","Kephalai","Key","Killbot","Kinshala","Kiora","Kirin",
        "Kithkin","Knight","Kobold","Kolbahan","Kor","Koth","Kraken","Kyneth","Lady","Lair","Lamia","Lammasu","Leech","Legend","Leviathan","Lhurgoyf","Licid","Liliana","Lizard","Lobster","Locus","Lorwyn","Lukka",
        "Luvion","Mammoth","Manticore","Master","Masticore","Mercadia","Mercenary","Merfolk","Metathran","Mime","Mine","Minion","Minotaur",
        "Mirrodin","Moag","Mode","Mole","Monger","Mongoose","Mongseng","Monk","Monkey","Moonfolk","Mountain","Mouse","Mummy","Muraganda","Mutant","Myr","Mystic",
        "Naga","Nahiri","Narset","Nastiest,","Nautilus","Nephilim","New Phyrexia","Nightmare","Nightstalker","Ninja","Nissa","Nixilis",
        "Noble","Noggle","Nomad","Nymph","Octopus","Ogre","Oko","Ooze","Orc","Orgg","Otter","Ouphe","Ox","Oyster","Pangolin","Paratrooper","Peasant","Pegasus",
        "Penguin","Pest","Phelddagrif","Phoenix","Phyrexia","Phyrexian","Pilot","Pirate","Plains","Plant","Power-Plant","Praetor","Processor",
        "Proper","Pyrulea","Rabbit","Rabiah","Raccoon","Ral","Rat","Rath","Ravnica","Rebel","Reflection","Regatha","Rhino","Rigger","Rogue","Rowan","Sable","Saga","Saheeli","Salamander","Samurai",
        "Samut","Sarkhan","Satyr","Scarecrow","Scientist","Scorpion","Scout","Segovia","Serpent","Serra","Serra’s Realm",
        "Shade","Shadowmoor","Shaman","Shandalar","Shapeshifter","Shark","Sheep","Ship","Shrine","Siren","Skeleton","Slith","Sliver","Slug","Snake","Soldier",
        "Soltari","Sorin","Spawn","Specter","Spellshaper","Sphinx","Spider","Spike","Spirit","Sponge","Spy","Squid","Squirrel","Starfish","Surrakar","Swamp",
        "Szat","Tamiyo","Teferi","Teyo","Tezzeret","Thalakos","The","Thopter","Thrull","Tibalt","Tower","Townsfolk","Trap","Treefolk","Trilobite","Troll","Turtle",
        "Ugin","Ulgrotha","Unicorn","Urza","Urza’s","Valla","Vampire","Vampyre","Vedalken","Vehicle","Venser","Viashino","Villain","Vivien",
        "Volver","All","Vraska","Vryn","Waiter","Wall","Warlock","Warrior","Weird","Werewolf","Whale","Wildfire","Will","Windgrace","Wizard","Wolf","Wolverine","Wombat","Worm","Wraith","Wrenn","Wrestler","Wurm","Xenagos","Xerex","Yanggu","Yanling","Yeti","Zendikar","Zombie","Zubera"]
    const supertypes = ["All","Basic","Host","Legendary","Ongoing","Snow","World"]
    const format = ["All","Brawl","Commander","Duel","Future","Historic","Legacy","Modern","Oldschool","Pauper","Penny","Pioneer","Standard","Vintage"]
    //state variable
    const [currentType, setCurrentType] = useState(def);
    const [currentSubType, setCurrentSubType] = useState(def)
    const [currentSuperType, setCurrentSuperType] = useState(def)
    const [currentFormat, setCurrentFormat] = useState(def)

    useEffect(() => {
        setCardsWithParam({
            type: currentType === def? null : currentType,
            format: currentFormat === def? null : currentFormat,
            subtype: currentSubType === def? null : currentSubType,
            supertype: currentSuperType === def? null : currentSuperType
        })
    }, [currentFormat, currentType, currentSubType, currentSuperType])
    return (
        <div style={style}>
            <div style={box}>
                <p>Type</p>
                <DropDownMenu value={currentType} list = {types} change = {setCurrentType}/>
            </div>
            <div style={box}>
                <p>Subtype</p>
                <DropDownMenu value={currentSubType} list = {subtypes} change = {setCurrentSubType}/>
            </div>
            
            <div style={box}>
                <p>Supertype</p>
                <DropDownMenu value={currentSuperType} list = {supertypes} change = {setCurrentSuperType}/>
            </div>
            
            <div style={box}>
                <p>Format</p>
                <DropDownMenu value={currentFormat} list = {format} change = {setCurrentFormat}/>
            </div>
            
        </div>
    )
}

const style = {
    display: 'flex'
}

const box = {
    width: '5em'
}

export default Filter
/**
 * Interscetion Basics
 * 
 * AND의 개념
 */

interface Human {
    name : string;
    age : number;
}

interface Contacts {
    phone : string;
    address : string;
}

type HumanAndContacts = Human & Contacts;

const humanAndContacts : HumanAndContacts = {
    name : "IU",
    age : 10,
    phone : "010-1234-5678",
    address : "Seoul"
}
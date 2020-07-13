/* eslint-disable no-unused-vars */
// Niz koji sadrzi 3 slova
const triSlova = ['s', 'm', 'l']

// Niz koji sadrzi 3 broja
const triBroja = [3, 4, 9]
/*
//Cetiri niza
const imena = ['Stefa','Goran','Dragan','Marko'];
const prezimena = ['Ilic','Stankovic', 'Bulatovic', 'Milic'];
const automobili = ['Jaguar','Audi','BMW','Opel'];
const zanimanje = ['Menadzer', 'Bastovan','Doktor', 'Arhitekta'];
*/
// 50 random brojeva
function randomBroj (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomBrojNiz = []
for (let i = 0; i < 15; i++) {
  const broj = randomBroj(1000000, 10000000)
  let moze = true

  for (let j = 0; j < i; j++) {
    if (broj === randomBrojNiz[j]) {
      moze = false
    }
  }
  if (!moze) {
    i--
    continue
  }
  randomBrojNiz[i] = broj
}
// console.log(randomBrojNiz)

// 200 random slova

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const randomSlova = []

for (let i = 0; i < 200; i++) {
  randomSlova[i] = alphabet[Math.floor(Math.random() * 25)]
}

// Cirilica

const cirilica = 'абвгдђжзијклљмнњопрстћуфхцчџш'.split('')

// Objekti

// Osobe

const osobe = {
  osoba1: {
    ime: 'Dragan',
    prezime: 'Mojsic',
    zanimanje: 'Doktor',
    visina: '1.75',
    tezina: '86 kg',
    automobil: ''

  },
  osoba2: {
    ime: 'Stefan',
    prezime: 'Markovic',
    zanimanje: 'Mehanicar',
    visina: '1.96',
    tezina: '78 kg',
    automobil: ''

  },
  osoba3: {
    ime: 'Nikola',
    prezime: 'Batinic',
    zanimanje: 'Pilot',
    visina: '1.78',
    tezina: '75 kg',
    automobil: ''

  },
  osoba4: {
    ime: 'Petar',
    prezime: 'Milovic',
    zanimanje: 'Vozac',
    visina: '1.87',
    tezina: '80 kg',
    automobil: ''

  },
  osoba5: {
    ime: 'Miroslav',
    prezime: 'Gajic',
    zanimanje: 'Automehanicar',
    visina: '179',
    tezina: '110 kg',
    automobil: ''

  }
}

// Automobili
const automobili = {
  automobil1: {
    marka: 'Opel',
    boja: 'Crna',
    brojVrata: 5
  },
  automobil2: {
    marka: 'Lamborgini',
    boja: 'Zuta',
    brojVrata: 3
  },
  automobil3: {
    marka: 'Audi',
    boja: 'Bela',
    brojVrata: 5
  },
  automobil4: {
    marka: 'Jaguar',
    boja: 'Siva',
    brojVrata: 3
  },
  automobil5: {
    marka: 'Jeep',
    boja: 'Crna',
    brojVrata: 3
  }
}

// Zadatak 3
osobe.osoba1.automobil = automobili.automobil1
osobe.osoba2.automobil = automobili.automobil4
osobe.osoba3.automobil = automobili.automobil3
osobe.osoba4.automobil = automobili.automobil5
osobe.osoba5.automobil = automobili.automobil2
/* eslint-disable no-unused-vars */

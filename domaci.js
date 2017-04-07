/*
 *
 * Domaci iz PRAKTIKUM PRIMENJENOG PROGRAMIRANJA I 
 * Autor: Luka Ilic, Informacione tehnologije.
 * Intend: 4 spaces.
 *
 */



/*Zadataj 1.
Definišite funkciju max() koja ima dva argumenta i koja vraća vrednost većeg od njih. 
Koristite if-then-else konstrukciju koja postoji u JvaScript-u.*/
/*
function max(a,b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }   
}

console.log(max(5,17));
*/

/*Zadatak 2.
Definišite funkciju  maxOfThree() koja ima tri argumenta i vraća najveći od njih.*/
/*
function max(a,b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(max(max(5,17),512));
*/

/*Zadatak 3.
Napišite funkciju koja uzima jedan karakter ( string dužine 1) i 
vraća true ako je taj karakter samoglasnik, a false ako je suglasnik.*/
/*
function sug_samo(s) {
    var suglasnik = "aeiou";
    for(var i = 0; i<suglasnik.length; i++) {
        if(suglasnik[i] === s) {
            return true;
        }
    }
    return false;
}

console.log(sug_samo("a"));
*/

/*Zadatak 4.
Napišite funkciju translate() koja prevodi tekst tako što duplira svaki samoglasnik u tekstu, 
a između njih umetne slovo “o”. Na primer tekst “ovo je smešno” prevodi u tekst “ovovo joje totesoskoko”.*/

/*Zadatak 5.
Definisite funkciju suma() i funkciju proizvod() kojim se sumiraju i množe svi brojevi u nizu brojeva. 
Na primer, suma([1,2,3,4]) treba da vrati 10, a proizvod([1,2,3,4]) vraća 24.*/
/*
function suma(a) {
    var suma = 0;
    for(var i = 0; i<a.length; i++) {
        suma+=a[i];
    }
    return suma;
}

function proizvod(a) {
    var proizvod = 1;
    for(var j = 0; j<a.length; j++) {
        proizvod*=a[j];
    }
    return proizvod;
}

console.log(suma([1,2,3,4]));
console.log(proizvod([2,4]));
*/

/*Zadatak 6.
Definišite funkciju reverse() koja vraća string u obrnutom redosledu karaktera. 
Na primer, reverse(“moj primer”) treba da vrati string “remirp jom”.*/
/*
function reverse(s) {
    var novi_str = "";
    for(var i = s.length -1; i>=0; i--) {
        novi_str+=s[i];
    }
    return novi_str;
}

console.log(reverse("obrnuto"));
*/

/*Zadatak 7.
Predstavite jedan mali rečnik kao JavaScript objekat na sledeći način: {“happy”: “srećna”, “new”: “nova”, “year”: “godina”}. 
Iskoristite ovaj rečnik za prevod novogodišnje čestitke sa engleskog na srpski jezik.*/
/*
function dict(s) {
    var niz = s.split(" ");
    var dict = {
        "happy": "srećna", 
        "new": "nova", 
        "year": "godina"
    };
    var novi_string = dict["happy"]+" "+dict["new"]+" "+dict["year"];
    return novi_string;
}

console.log(dict("happy new year"));
*/

/*Zadatak 8.
Napišite funkciju najduzaRec() koja uzima niz reči i vraća najdužu među njima.*/
/*
function najduzaRec(a) {
    var broj = 0;
    var najduza_rec;
    for(var i = 0; i<a.length; i++) {
        if(a[i].length > broj) {
            broj = a[i].length;
            najduza_rec = a[i];
        }
    }
    return najduza_rec;
}

console.log(najduzaRec(["asd","nisam najduzi", "f", "da_li_sam_najduzi?"]));
*/

/*Zadatak 9.
Napišite funkciju filtrirajReci() koja uzima niz reči i jedan ceo broj i, pa vraća niz reči koje su duže od i.*/
/*
function filtrirajReci(a,i) {
    var niz = [];
    for(var j = 0; j<a.length; j++) {
        if(a[j].length > i) {
            niz.push(a[j]);
        }
    }
    return niz;
}

console.log(filtrirajReci(["a", "asd", "a", "asfff3"],2));
*/

/*Zadatak 10.
Napišite funkciju frekSlova() koja uzima string i pravi listu frekvencija slova koja se pojavljuju u stringu. 
Listu frekvencija predstavite kao JavaScript objekat. Testirajte program sa frekSlova(“abbabcbdbabdbdbabababcbcbab”).*/
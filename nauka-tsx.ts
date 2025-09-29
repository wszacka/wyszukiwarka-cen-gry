//FILMIK: https://www.youtube.com/watch?v=TPACABQTHvM

let url = "https:www.google.com";
//url = 5; BŁĄD!! INNY TYP

//bez pokazania jaki typ, mozemy dac wszystko (any)
function convertCurrency(amount: number, currency: string) {
  //...
}

convertCurrency(2, "USD"); //jest okej
//convertCurrency("EUR", "USD"); BŁĄD!! INNY TYP

/* ---------aby dać klase dla props---------
export default function Button({backgroundColor}:{backgroundColor: string}) {
    ...
}

lub po prostu
export default function Button(props:{backgroundColor: string}) 
    const {backgroundColor} = props;
    ...
}

*********aby sie nie powtarzac przy duzej ilosci

type ButtonProps = {
    backgroundColor: string;
    fontSize: number;
    pillShape?:boolean;
}
wtedy wszystkie trzy sa KONIECZNE, mozna dodac "?" aby zrobic je opcjonalne

export default function Button({
    backgroundColor,
    fontSize,
    pillShape
    }: ButtonProps) {
    ...
}
*/

//mozna byc bardziej szczegolowym zamiast string np. bgCl: "red" | "blue"

//typowanie funkcji: nazwa : (argument:typ) => co zwraca

//aby argument bral tylko elementy reacta np. div nazwa: JSX.Element
//jesli chcemy aby bral wszystko, razem z tekstem: React.ReactNode

//props jak button maja sporo zmiennych, aby ich nie wypisywac type ButtonProps = React.ComponentPropsWithoutRef<"button">

//useState automatycznie ustawia typ jaki wstawiamy do useState, albo niekoniecznie useState<string>("click")

// as const do listy, zobacz na filmiku co robi
// Omit aby pominac dany typ

//GENERICS const convertToArray= <T,>(value: T): T[] => {
//  return [value]} gdy mamy arrow function, w zwyklej robimy <> po nazwie bez przecinka

//jak robimy fetch, dobrze jest ustawic typ na unknown?????

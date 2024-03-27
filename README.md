# Calcolatore Prezzo Biglietto - README

## Funzionamento del programma:

Il programma funziona nel seguente modo:

### Diagramma di flusso logico:

 1. Richiesta al cliente dei Kilometri che vuole percorrere e dichiarazione variabile (inoltre stampa dei dati in console log);
2. Richiesta al cliente dell'età e dichiarazione variabile (inoltre stampa dei dati in console log);

3. Calcolo del prezzo del biglietto per i Kilometri inseriti dall'utente;
4. Applicare lo sconto in base all'età:
  Inizializzare la variabile "sconto" a 0;
  SE (minorenne)
    - Applicare lo sconto del 20%;
OPPURE SE (over 65)
    - Applicare lo sconto del 40%;

5. Calcolo del prezzo finale;
6. Formattare il prezzo finale lasciando solo gli ultimi due numeri decimali (es: "0€");

7. Visualizzare il prezzo finale in HTML (inoltre stampa dei dati in console log);
06.01.2020
=============
- Impostato struttura dei file;
- sperimentato creazione del terreno tramite Heightmap.

07.01.2020
=============
- Scelta della Heightmap;
- creazione del terreno a partire dalla Heightmap;
- Modifica di alcuni pixel della immagine Heightmap per modificare il terreno in base all'idea da implementare;
- implementazione dell'algoritmo per colorare i cubi in base all'altezza di questi utlimi.

08.01.2020
=============
- Creazione degli oggetti Pino, Ponte, Casa;
- aggiunta di tali oggetti nella scena;
- implementazione dell'algoritmo per cercare una posizione pseudo-randomica per i pini nel terreno.

09.01.2020
=============
- Modifica della luminosità e contrastro della immagine Heightmap perchè il terreno della scena risulti più scuro;
- modifica dell'algoritmo di creazione posizione per escludere la creazione degli alberi dentro il fiume;
- creazione dell'oggetto nuvola secondo scelta pseudo-casuale sia della forma che della grandezza.

10.01.2020
=============
- Aggiunta di dieci nuvole alla scena in posizione pseudo casuale ma fuori dal terreno;
- creazione di traslazione delle nuvole dalla posizione di partenza ad una posizione pseudo-causale all'interno del terrno;
- creazione della traslazione inversa ma non funzionante.

11.01.2020
=============
- Fix animazione delle nuvole che ritornano alla posizione di partenza
- impostato struttura delle animazione nell'Update secondo il passare dei frame;
- aggiunta dei fiocchi di neve dopo che le nuvole hanno raggiunto la fine della propria animazione;
- implementazione dell'animazione dei fiocchi di neve che cadono sul terreno quando le nuvole sono all'interno del terreno. 

12.01.2020
=============
- Completato loop di animazione con l'implementazione della deposizione e scioglimento della neve sul terreno tramite modifica graduale del colore dei cubi del terreno

13.01.2020
=============
- Resa l'animazione ciclica, tramite reset dei timer all'interno dell'Update e impostando determinati timer per inizio e fine delle animazioni.
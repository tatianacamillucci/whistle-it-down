# Whistle-it-down

*Progetto di studio in corso — struttura iniziale, non è un prodotto commerciale.*

## Il problema
Tenersi aggiornati controllando ogni giorno a mano siti di notizie e fonti specializzate richiede tempo, e le informazioni utili si perdono tra quelle inutili.

## La soluzione
Un'automazione che ogni mattina, all'orario scelto:
1. raccoglie i nuovi contenuti dalle fonti indicate (feed RSS e pagine web);
2. li fa leggere e riassumere a un modello di intelligenza artificiale;
3. prepara un breve report con ciò che conta.

## Stato
Sono pronti la pianificazione automatica e la raccolta dai feed RSS; analisi e report sono in sviluppo.

## Struttura
- `src/run.ts` — pianificazione giornaliera
- `src/sources/` — raccolta dei contenuti (RSS)

## Strumenti
Node.js, TypeScript, Playwright, API di OpenAI.

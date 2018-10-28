import { Exercise } from './exercise';

export const EXERCISES: Exercise[] = [
    { id: 105, freeExercise: false, weight: 80, hatfield: 80, fiveXfive: 0, name: 'Bankdrücken Langhantel' },
    { id: 106, freeExercise: false, weight: 32, hatfield: 0, fiveXfive: 0, name: 'Bankdrücken freihändig pro Seite'},
    { id: 415, freeExercise: false, weight: 60, hatfield: 0, fiveXfive: 0, name: 'Bankdrücken eng' },
    { id: 109, freeExercise: false, weight: 60, hatfield: 60, fiveXfive: 0, name: 'Bankdrücken schräg 45°' },
    { id: 110, freeExercise: false, weight: 30, hatfield: 0, fiveXfive: 0, name: 'Bankdrücken schräg freihändig pro Seite°' },
    { id: 113, freeExercise: false, weight: 45, hatfield: 0, fiveXfive: 0, name: 'Bankdrücken negativ' },
    { id: 1131, freeExercise: false, weight: 26, hatfield: 0, fiveXfive: 0, name: 'Bankdrücken negativ freihändig pro Seite'},
    { id: 1132, freeExercise: false, weight: 50, hatfield: 0, fiveXfive: 0, name: 'Bankdrücken negativ eng' },
    { id: 102, freeExercise: false, weight: 65, hatfield: 0, fiveXfive: 0, name: 'Butterfly' },
    { id: 116, freeExercise: false, weight: 20, hatfield: 0, fiveXfive: 0, name: 'Fliegende freihändig' },
    { id: 1161, freeExercise: false, weight: 15, hatfield: 0, fiveXfive: 0, name: 'Fliegende Kabelzug' },
    { id: 1162, freeExercise: false, weight: 0, hatfield: 0, fiveXfive: 0, name: 'Fliegende schräg 45°'},
    { id: 118, freeExercise: false, weight: 16, hatfield: 0, fiveXfive: 0, name: 'Fliegende negativ' },
    { id: 115, freeExercise: false, weight: 10, hatfield: 0, fiveXfive: 0, name: 'Kabelzug unten' },
    { id: 114, freeExercise: false, weight: 20, hatfield: 0, fiveXfive: 0, name: 'Butterfly Kabelzug vorgebeugt' },
    { id: 1141, freeExercise: false, weight: 10, hatfield: 0, fiveXfive: 0, name: 'Kabelzug hoch stehend'},
    { id: 1, freeExercise: true, weight: 0, hatfield: 0, fiveXfive: 0, name: 'Liegestütz' },
    
    { id: 11, freeExercise: true, weight: 0, hatfield: 0, fiveXfive: 0, name: 'Sit-Ups' },
    { id: 12, freeExercise: true, weight: 0, hatfield: 0, fiveXfive: 0, name: 'Crunch' },

    /*
    Kabelzug  hoch  stehend  10
    LiegestützRücken  Kreuzheben + Beine  pS  E13  20
    Latzugmaschine  B2, 5  95
    Ruderzugmaschine  B0185Ruderzugmaschine  B10  85
    Ruderzug  Kabel  beidh.Eng  B11  45
    T - Bar  Rudern  frei  B13  35
    T - Bar  Maschine / aufgelegt  B  14  50
    Langhantelrudern  vg  B15  45
    Kurzhantelrudern  einh.B12  24
    Latzug  breit  Nacken  B06  60
    Latzug  eng  Untergriff  B07  
    Latzug  eng  zur  Brust  B08  65
    Latzug  breit  zur  Brust  B09  60
    Kabelzug  hoch  steh.üK  10
    Face  Pull  hoch  steh.Kabel  30
    Snatch  40
    
    Trizeps    Nr.kgHF5x5  
    Pushdown  Seil  beidh.D1235
    Pushd.Rev  Stange  Untergr  D1325
    Frenchpress  SZ  D1625
    Überzüge  liegend  A19  26
    Trizepsmaschine  D11
    Frenchpress  sitzend  D17
    Kurzhantel  Trizepsstrecken  D189  
    Trizepsstreck  Kabel  hoch  D1925
    Kickbacks  am  Ruderzug  B11  5  
    Trizepsstrecken  Scheibe    15
    Pushdown  einhändig  15
    Dips  Bizeps  Curl  Seil  beidh.D0335
    Preacher  Curl  einh.D0716
    Preacher  Curl  SZ  pS  D0610
    Preacher  SZ  Reverse  pS  D107, 5
    Langhantel  Curl  frei  D0230Curls  an  Wand  D0410
    Hammer  Curl  Freih.pS  12Curl  Kabelzug  hoch  D0912, 5
    Konzentrationscurl  D0814
    Bizepsmaschine  D01Curls  schräg  sitzend  D05
    Curl  Kabel  einhändig  15Unterarme  Curl  Obergr.einh.  9  
    Curl  Obergr.Langh.Curl  Untergr.einh.  14
    Curl  Untergr.Langh.Curl  hinter  Rücken  pS  20


    Beine  Nr.kgHF5x5  

    Beinpresse  E01  140170 - 130
    Wadenheben  stehend  E07  75
    Wadenheben  sitzend  E07  55
    Beinstrecker  E04  60
    Beinbeuger  E05  60
    Gesäßpresse  E06  35
    Abduktoren  E02  65
    Adduktoren  E03  65
    Ausfallschritt  pS  E15  16
    Ausfallschritt  seitlich  pS  10
    Kniebeuge  E10  60
    Frontkniebeuge  E12  40
    Schulter / Nacken    
    
    Nr.kgHF5x5  

    Butterfly  Reverse  C01  60
    Schulterpresse  C2, 4  45
    Seithebemaschine  C03  40
    Frontdrücken  Multipresse  C05  40
    Drücken  Nacken  Multipr.C07  
    Schulterdrücken  Freih.pS  C06  16
    Frontheben  Kabel  o.frei  C16f  7  
    Seitheben  Kabel  o.frei  C11f  7  
    Seitheben  eng  Freih.pS  10
    Seitheben  Armkreisen  
    Schulterheben  Shrugs  C08  
    Rudern  steh  Langh.SZ / pSC09  15
    Rudern  stehend  Kabel  C10  
    Innenrotation  Kabel    7, 5  
    Außenrotation  Kabel    5  
    Seitheb.Kabel  unten  vg  üK  C15  6, 25  
    Woodchopper  Bauch  Seil  25

    */


];
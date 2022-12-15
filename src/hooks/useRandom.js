
const useRandom = () => {
        const homoList = 
        ['ail', 'ale', 'airs',  'heirs', 'aisle', 'ascent', 'assent', 'aural', 'oral', 'auricle',  'oracle', 'berth' , 'birth', 'boy' , 'buoy', 'cached' , 'cashed', 'Carrot', 'karat', 'cede', 'censor',  'sensor', 'chased',  'chaste', 'choirs' ,'quires','chords' , 'cords', 'chute' , 'shoot' , 'coax' , 'cokes', 'cocks' ,'cox', 'coffer' , 'cougher', 'Colonel' ,  'kernel', 'cops' , 'copse','core' , 'corps','cygnet' , 'signet','symbol','dew' , 'due', 'done' , 'dun','draft' , 'draught', 'earns' , 'urns', 'ewes' , 'use','eyelet' , 'islet', 'gnu' , 'knew', 'halls' , 'hauls','heed','hertz' , 'hurts','him' , 'hymn','hoarse' , 'horse','holy' , 'wholly', 'instance' , 'instants','intense' , 'intents','jewels' , 'joules','key', ' quay','knap' , 'nap','knead','need','knit' , 'nit','knob' , 'nob','lichens' , 'likens','licker' , 'liquor','lieu' , 'loo','links' , 'lynx','loon' , 'lune','marshal',  'martial','medal', 'meddle','metal' , 'mettle','oohs' , 'ooze', 'racks' , 'wracks', 'rapt' , 'wrapped', 'recede' , 'reseed', 'receipt' , 'reseat','reek' , 'wreak','reign' , 'rein','rest' , 'wrest','review' , 'revue','rex' , 'wrecks','ring' , 'wring','rite' , 'wright','rote' , 'wrote','rude' , 'rued', 'rye' , 'wry','taught' , 'taut','tear' , 'tier','vail' , 'veil','vain' , 'vein','variance' , 'variants','vial' , 'vile','wade' , 'weighed','watts' , 'wright' , 'write' 
        ]
        
        let word = homoList[Math.floor(Math.random()*homoList.length)];

        

        return word
}

export default useRandom;
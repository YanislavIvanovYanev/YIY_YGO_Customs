// ==UserScript==
// @name         DB Custom Frames
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Change frames of name specific cards
// @author       You
// @match        https://www.duelingbook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const FRAME_VERSION = "v4";

    const LINK_FUSION_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/LinkFusion.png";
    const LINK_FUSION_NAMES = ["Avendread Savior"];

    const EVOLUTION_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Evolution.png";
    const EVOLUTION_NAMES = ["Horus the Black Flame Dragon LV8", "Horus the Black Flame Deity", "Ruddy Rose Dragon", //AZDG Uria
     "Supreme King Gate Infinity", "Sphere of Chaos", "Elemental HERO Spirit of Neos", "Light and Darkness Dragonlord", "Cyberdark End Dragon", //Nverse
     "Revendread Executor", "The Wicked Dreadroot", "Underworld Fighter Balmung", "Destiny HERO - Destroyer Phoenix Enforcer", //Dread HERO Zombyra
        "Destiny HERO - Dogma",
    ];

    const EVOLUTION_SPELL_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/EvolutionSpell.png";
    const EVOLUTION_SPELL_NAMES = ["Revendread Evolution", //Dread HERO Zombyra

    ];

    const SPIRITUAL_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Spiritual.png";
    const SPIRITUAL_NAMES = ["Jack-o-Bolan", "Doomkaiser Dragon / Assault Mode", //AZDG Uria
     /**"Shell of Chaos",**/ "Supreme King Gate Zero", "Black Dragon Colapserpent", "D/D Zero Doom Queen's Throne", //Nothingverse
     "Destiny HERO - Plasma", "Destiny HERO - Dangerous", //Dread HERO Zombyra
    ];

    const TOKEN_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Raw/token_front2.webp?v=3";
    const TOKEN_NAMES = ["Shell of Chaos"];

    function setFrame(cardFront, frame) {
        cardFront.find(".card_color").attr("src", frame + "?v=" + FRAME_VERSION);
    }

    function applyCustomFrame(cardFront, cardName, creator)
    {
        if (!cardFront || !cardName || creator != "YaniYa")
            return;

        if (LINK_FUSION_NAMES.includes(cardName)) setFrame(cardFront, LINK_FUSION_FRAME);
        else if (EVOLUTION_NAMES.includes(cardName)) setFrame(cardFront, EVOLUTION_FRAME);
        else if (EVOLUTION_SPELL_NAMES.includes(cardName)) setFrame(cardFront, EVOLUTION_SPELL_FRAME);
        else if (SPIRITUAL_NAMES.includes(cardName)) setFrame(cardFront, SPIRITUAL_FRAME);
        else if (TOKEN_NAMES.includes(cardName)) setFrame(cardFront, TOKEN_FRAME);
        
    }
    unsafeWindow.applyCustomFrame = applyCustomFrame;
//YaniYa 25
})();
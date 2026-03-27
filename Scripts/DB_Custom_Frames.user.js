// ==UserScript==
// @name         DB_Custom_Frames
// @namespace    http://tampermonkey.net/
// @version      1.6.3
// @homepageURL  https://github.com/yanislavivanovyanev/YIY_YGO_Customs/
// @updateURL    https://raw.githubusercontent.com/yanislavivanovyanev/YIY_YGO_Customs/main/Scripts/DB_Custom_Frames.user.js
// @downloadURL  https://raw.githubusercontent.com/yanislavivanovyanev/YIY_YGO_Customs/main/Scripts/DB_Custom_Frames.user.js
// @description  Change frames of name specific cards
// @author       YanislavIvanovYanev
// @match        https://www.duelingbook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const SMALL_CUSTOM = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Misc/SmallCustom.svg";

    const FRAME_VERSION = "v5";

    const LINK_FUSION_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/LinkFusion.png";
    const LINK_FUSION_NAMES = ["Avendread Savior"];

    const EVOLUTION_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Evolution.png";
    const EVOLUTION_NAMES = ["Horus the Black Flame Dragon LV8", "Horus the Black Flame Deity", "Ruddy Rose Dragon", //AZDG Uria
     "Supreme King Gate Infinity", "Sphere of Chaos", "Elemental HERO Spirit of Neos", "Light and Darkness Dragonlord", "Cyberdark End Dragon", //Nothingverse
     "Revendread Executor", "The Wicked Dreadroot", "Underworld Fighter Balmung", "Destiny HERO - Destroyer Phoenix Enforcer", //Dread HERO Zombyra
        "Destiny HERO - Dogma",
    ];

    const EVOLUTION_SPELL_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/EvolutionSpell.png";
    const EVOLUTION_SPELL_NAMES = ["Revendread Evolution", //Dread HERO Zombyra
        "Void Expansion in Chaos",
    ];

    const SPIRITUAL_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Spiritual.png";
    const SPIRITUAL_NAMES = ["Jack-o-Bolan", "Doomkaiser Dragon / Assault Mode", //AZDG Uria
     "Shell of Chaos", "Supreme King Gate Zero", "Black Dragon Colapserpent", //Nothingverse
     "Destiny HERO - Plasma", "Destiny HERO - Dangerous", //Dread HERO Zombyra
    ];

    const TOKEN_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Raw/token_front2.webp?v=3";
    const TOKEN_NAMES = ["D/D Zero Doom Queen's Throne", "D/D Oblivion King's Throne", //Nothingverse

    ];

    function setFrame(cardFront, frame)
    {
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

    function removeCustom(cardFront)
    {
        cardFront.find(".custom").attr("src", SMALL_CUSTOM);
    }
    unsafeWindow.removeCustom = removeCustom;
//args [25] = / passcode = [YaniYa]
})();
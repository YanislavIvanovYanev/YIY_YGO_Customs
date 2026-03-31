// ==UserScript==
// @name         DB_Custom_Frames
// @namespace    http://tampermonkey.net/
// @version      1.6.7
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

    const FRAME_VERSION = "v5";

    const SMALL_CUSTOM = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Misc/SmallCustom.svg";

    const SLEEVE_LOOKUP = {
        "179" : "338.jpg", //Dark Magicians, 228.jpg is older ver
        "122" : "323.jpg", //Uria
        "107" : "134.jpg", //Nothingverse
        "15" : "332.jpg", //Dark Link Fusion (D.HERO-Zombyra T/D/D)
    }

//Frame urls

    const LINK_FUSION_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/LinkFusion.png";
    const EVOLUTION_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Evolution.png";
    const EVOLUTION_SPELL_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/EvolutionSpell.png";
    const SPIRITUAL_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Spiritual.png";
    const TOKEN_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Raw/token_front2.webp?v=3";

//reyx200 Frame names

    const LINK_FUSION_NAMES_RX = [

    ];

    const EVOLUTION_NAMES_RX = [
     "Palladium Oracle Mahad", //Yugi
    ];

    const EVOLUTION_SPELL_NAMES_RX = [
        
    ];

    const SPIRITUAL_NAMES_RX = [
     "Royal Straight Slasher", "Kuribabylon", "Multiplying Kuriboh", //Yugi
    ];

    const TOKEN_NAMES_RX = [

    ];

//YaniYa Frame names

    const LINK_FUSION_NAMES_YY = [
     "Avendread Savior", //D.HERO-Zombyra T/D/D
    ];

    const EVOLUTION_NAMES_YY = [
     "Horus the Black Flame Dragon LV8", "Horus the Black Flame Deity", "Ruddy Rose Dragon", //AZDG Uria
     "Supreme King Gate Infinity", "Sphere of Chaos", "Elemental HERO Spirit of Neos", "Light and Darkness Dragonlord", "Cyberdark End Dragon", //Nothingverse
     "Revendread Executor", "The Wicked Dreadroot", "Underworld Fighter Balmung", "Destiny HERO - Destroyer Phoenix Enforcer", //D.HERO-Zombyra T/D/D
        "Destiny HERO - Dogma",
    ];

    const EVOLUTION_SPELL_NAMES_YY = [
     "Revendread Evolution", //D.HERO-Zombyra T/D/D
        
    ];

    const SPIRITUAL_NAMES_YY = [
     "Jack-o-Bolan", "Doomkaiser Dragon / Assault Mode", //AZDG Uria
     "Shell of Chaos", "Supreme King Gate Zero", "Black Dragon Colapserpent", //Nothingverse
     "Destiny HERO - Plasma", "Destiny HERO - Dangerous", //D.HERO-Zombyra T/D/D
    ];

    const TOKEN_NAMES_YY = [
     "D/D Zero Doom Queen's Throne", "D/D Oblivion King's Throne", //Nothingverse

    ];

//Frames
    function setFrame(cardFront, frame)
    {
        cardFront.find(".card_color").attr("src", frame + "?v=" + FRAME_VERSION);
    }
    function applyCustomFrame(cardFront, cardName, creator)
    {
        //args [25] = / passcode = [YaniYa]
        if(!cardFront || !cardName || creator == null || creator == undefined || creator == "")
            return;

        if(creator == "reyx200")
        {
            if(LINK_FUSION_NAMES_RX.includes(cardName)) setFrame(cardFront, LINK_FUSION_FRAME);
            else if(EVOLUTION_NAMES_RX.includes(cardName)) setFrame(cardFront, EVOLUTION_FRAME);
            else if(EVOLUTION_SPELL_NAMES_RX.includes(cardName)) setFrame(cardFront, EVOLUTION_SPELL_FRAME);
            else if(SPIRITUAL_NAMES_RX.includes(cardName)) setFrame(cardFront, SPIRITUAL_FRAME);
            else if(TOKEN_NAMES_RX.includes(cardName)) setFrame(cardFront, TOKEN_FRAME);
        }

        if(creator != "YaniYa")
            return;
        if(LINK_FUSION_NAMES_YY.includes(cardName)) setFrame(cardFront, LINK_FUSION_FRAME);
        else if(EVOLUTION_NAMES_YY.includes(cardName)) setFrame(cardFront, EVOLUTION_FRAME);
        else if(EVOLUTION_SPELL_NAMES_YY.includes(cardName)) setFrame(cardFront, EVOLUTION_SPELL_FRAME);
        else if(SPIRITUAL_NAMES_YY.includes(cardName)) setFrame(cardFront, SPIRITUAL_FRAME);
        else if(TOKEN_NAMES_YY.includes(cardName)) setFrame(cardFront, TOKEN_FRAME);
        
    }
    unsafeWindow.applyCustomFrame = applyCustomFrame;

//"CUSTOM" icon
    function removeCustom(cardFront)
    {
        cardFront.find(".custom").attr("src", SMALL_CUSTOM);
    }
    unsafeWindow.removeCustom = removeCustom;

//Sleeves
    function applyDeckSpecificSleeveToPlayer(player)
    {
        if(player.token in SLEEVE_LOOKUP)  player.sleeve = SLEEVE_LOOKUP[player.token];
    }
    function applyDeckSpecificSleeves(player1, player2)
    {
        applyDeckSpecificSleeveToPlayer(player1);
        applyDeckSpecificSleeveToPlayer(player2);
    }
    unsafeWindow.applyDeckSpecificSleeves = applyDeckSpecificSleeves;

})();


// ==UserScript==
// @name         DB Custom Frames
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Change frames of name specific cards
// @author       You
// @match        https://www.duelingbook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const LINK_FUSION_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/LinkFusion.png";
    const LINK_FUSION_NAMES = ["Avendread Savior"];

    const EVOLUTION_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Evolution.png";
    const EVOLUTION_NAMES = ["Horus the Black Flame Dragon LV8", "Horus the Black Flame Deity", "Ruddy Rose Dragon", "Supreme King Gate Infinity",
        "Sphere of Chaos", "Elemental HERO Spirit of Neos", "Light and Darkness Dragonlord", "Cyberdark End Dragon"];

    const SPIRITUAL_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Spiritual.png";
    const SPIRITUAL_NAMES = ["Jack-o-Bolan", "Doomkaiser Dragon / Assault Mode", "Shell of Chaos", "Supreme King Gate Zero", "Black Dragon Colapserpent",
        "D/D Zero Doom Queen's Throne"];

    const TOKEN_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Raw/token_front2.webp";
    const TOKEN_NAMES = ["Kuriboh"];

    function applyCustomFrame(cardFront, cardName, creator) {
        if (!cardFront || !cardName || creator != "YaniYa") return;

        if (LINK_FUSION_NAMES.includes(cardName)) {
            cardFront.find(".card_color").attr("src", LINK_FUSION_FRAME);
        } else if (EVOLUTION_NAMES.includes(cardName)) {
            cardFront.find(".card_color").attr("src", EVOLUTION_FRAME);
        } else if (SPIRITUAL_NAMES.includes(cardName)) {
            cardFront.find(".card_color").attr("src", SPIRITUAL_FRAME);
        } else if (TOKEN_NAMES.includes(cardName)) {
            cardFront.find(".card_color").attr("src", TOKEN_FRAME);
        }
    }
    unsafeWindow.applyCustomFrame = applyCustomFrame;
//YaniYa 25
})();
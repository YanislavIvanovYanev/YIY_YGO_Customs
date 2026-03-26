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

    const LINK_FUSION_NAMES = ["Avendread Savior"];
    const LINK_FUSION_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/LinkFusion.png";

    const EVOLUTION_NAMES = ["Horus the Black Flame Dragon LV8", "Horus the Black Flame Deity", "Ruddy Rose Dragon",
                             "Sphere of Chaos", "Elemental HERO Spirit of Neos", "Light and Darkness Dragonlord", "Cyberdark End Dragon"];
                             //"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    const EVOLUTION_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Evolution.png";

    const SPIRITUAL_NAMES = ["Jack-o-Bolan", "Doomkaiser Dragon / Assault Mode", "Shell of Chaos"];
                             //"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    const SPIRITUAL_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Spiritual.png";

    function applyCustomFrame(cardFront, cardName, creator) {
        if (!cardFront || !cardName || creator != "YaniYa") return;

        if (LINK_FUSION_NAMES.includes(cardName)) {
            cardFront.find(".card_color").attr("src", LINK_FUSION_FRAME);
        } else if (EVOLUTION_NAMES.includes(cardName)) {
            cardFront.find(".card_color").attr("src", EVOLUTION_FRAME);
        } else if (SPIRITUAL_NAMES.includes(cardName)) {
            cardFront.find(".card_color").attr("src", SPIRITUAL_FRAME);
        }
    }
    unsafeWindow.applyCustomFrame = applyCustomFrame;
//YaniYa 25
})();
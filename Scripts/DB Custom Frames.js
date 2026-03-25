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

    const EVOLUTION_NAMES = ["Avendread Savior", "Horus the Black Flame Dragon LV8", "Horus the Black Flame Deity", "Ruddy Rose Dragon",
                             "Sphere of Chaos", "Elemental HERO Spirit of Neos", "Light and Darkness Dragonlord", "Cyberdark End Dragon"];
                             //"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    const EVOLUTION_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Evolution.png";

    const SPIRITUAL_NAMES = ["Jack-o-Bolan", "Doomkaiser Dragon / Assault Mode", "Shell of Chaos"];
                             //"", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    const SPIRITUAL_FRAME = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/Frames/Custom/Spiritual.png";

    function applyCustomFrame(cardFront, cardName) {
        if (!cardFront || !cardName) return;

        if (LINK_FUSION_NAMES.includes(cardName)) {
            cardFront.find(".card_color").attr("src", LINK_FUSION_FRAME);
        }
        if (EVOLUTION_NAMES.includes(cardName)) {
            cardFront.find(".card_color").attr("src", EVOLUTION_FRAME);
        }
        if (SPIRITUAL_NAMES.includes(cardName)) {
            cardFront.find(".card_color").attr("src", SPIRITUAL_FRAME);
        }
    }
//YaniYa 25
//     /**
//      * Reuse the existing function from the script
//      * Finds a jQuery-wrapped card by its data('cardfront').data('name')
//      */
//     function findCardByName(cardArr, names) {
//         return cardArr.find(card => {
//             const cardName = card.data('cardfront').data('name');
//             return names.includes(cardName);
//         });
//     }

//     /**
//      * Replace the frame of Avendread Savior cards
//      * Accepts a jQuery collection or array of cards
//      */
//     function updateFrames(cards) {
//         const match = findCardByName(Array.from(cards), LINK_FUSION_NAMES);

//         if (match) {
//             match.find("img.card_color").attr("src", LINK_FUSION_FRAME);
//         }
//     }

//     // Initial pass: update any Avendread Savior cards already on board
//     updateFrames($(".card"));

//     // Watch for dynamically added cards
//     const observer = new MutationObserver((mutations) => {
//         for (const m of mutations) {
//             for (const node of m.addedNodes) {
//                 if (node.nodeType === 1 && $(node).hasClass("card")) {
//                     updateFrames([$(node)]);
//                 } else if (node.nodeType === 1) {
//                     // Also check descendants in case a card front is added deeper
//                     const newCards = $(node).find(".card");
//                     if (newCards.length) updateFrames(newCards);
//                 }
//             }
//         }
//     });

//     observer.observe(document.body, { childList: true, subtree: true });

})();
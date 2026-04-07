// ==UserScript==
// @name         DB_Custom_Frames
// @namespace    http://tampermonkey.net/
// @version      1.8.3
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

    const VERSION = "v12";

    const URL_START = "https://yanislavivanovyanev.github.io/YIY_YGO_Customs/";

    const SMALL_CUSTOM = URL_START + "Misc/SmallCustom.svg";

    const SLEEVE_LOOKUP = {
        "179" : "338.jpg", //Dark Magicians, 228.jpg is older ver
        "122" : "323.jpg", //Uria
        "107" : "134.jpg", //Nothingverse
        "15" : "332.jpg", //Dark Link Fusion (D.HERO-Zombyra T/D/D)
    }

//Full Art consts
    const FULL_ART_URL = URL_START + "FullArts/";

    const FULL_ART_NAMES = [ //may not be whole so they're applied for normal cards as well as custom cards with slightly different names
     "Darkest Knight", "Slifer", "Destroyer Phoenix", "- Plasma", "Atomic", "Dominance", "Zorc", "Uria,", "The Unstoppable Exodia Incarnate",
    ]; //string should be the exact name of the file too

    const SMALL_FULL_ART_NAMES = [ //doesn't change anything other than the picture
     "Dark Law", "dread Slayer",
    ];

    const style = document.createElement('style');
    style.textContent = `
      .white-outline-text {
        color: white !important;
        text-shadow:
          -1px -1px 0 black,
           1px -1px 0 black,
          -1px  1px 0 black,
           1px  1px 0 black !important;
      }
      .monster-line-fullart {
            background-color: white !important;
            height: 2px !important;
            z-index: -1 !important;
      }
    `;
    document.head.appendChild(style);

//Frame urls
    const FRAME_URL = URL_START + "Frames/Custom/";

    const BORDER = FRAME_URL + "Border.png";
    const TOKEN_FRAME = URL_START + "Frames/Raw/token_front2.webp?v=3";

    const EFFECT_FA_FRAME = FRAME_URL + "EffectFA.png";
    const RITUAL_FA_FRAME = FRAME_URL + "RitualFA.png";
    const FUSION_FA_FRAME = FRAME_URL + "Fusion.png";

    const LINK_FUSION_FA_FRAME = FRAME_URL + "LinkFusionFA.png";
    const EVOLUTION_FA_FRAME = FRAME_URL + "EvolutionFA.png";
    const SPIRITUAL_FA_FRAME = FRAME_URL + "SpiritualFA.png";

    const LINK_FUSION_FRAME = FRAME_URL + "LinkFusion.png";
    const EVOLUTION_FRAME = FRAME_URL + "Evolution.png";
    const EVOLUTION_SPELL_FRAME = FRAME_URL + "EvolutionSpell.png";
    const SPIRITUAL_FRAME = FRAME_URL + "Spiritual.png";

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
     "Avendread Savior", "Evil HERO - The Darkest Knight", "Elemental HERO - The Dark Bright", //D.HERO-Zombyra T/D/D
    ];

    const EVOLUTION_NAMES_YY = [
     "Horus the Black Flame Dragon LV8", "Horus the Black Flame Deity", "Ruddy Rose Dragon", //AZDG Uria
     "Supreme King Gate Infinity", "Sphere of Chaos", "Elemental HERO Spirit of Neos", "Light and Darkness Dragonlord", "Cyberdark End Dragon", //Nothingverse
     "Revendread Executor", "The Wicked Dreadroot", "Underworld Fighter Balmung", "Destiny HERO - Destroyer Phoenix Enforcer", //D.HERO-Zombyra T/D/D
        "Destiny HERO - Dogma",
     "The Unstoppable Exodia Incarnate", //Exodia
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

//Helper methods

    function setElement(cardFront, element, elementName)
    {
        cardFront.find(elementName).attr("src", element + "?v=" + VERSION);
    }
    

//Frames
    function setFrame(cardFront, frame)
    {
        setElement(cardFront, frame, ".card_color");
    }
    function applyCustomFrame(cardFront, cardName, creator, color)
    {
        if(!cardFront || !cardName)
            return;

        const fullArtName = FULL_ART_NAMES.find(name => cardFront.data('name').includes(name));
        
        if(creator == "reyx200")
        {
            let matches = true;

            if(fullArtName)
            {
                let matches2 = true;
                if(LINK_FUSION_NAMES_RX.includes(cardName)) setFrame(cardFront, LINK_FUSION_FA_FRAME);
                else if(EVOLUTION_NAMES_RX.includes(cardName)) setFrame(cardFront, EVOLUTION_FA_FRAME);
                else if(SPIRITUAL_NAMES_RX.includes(cardName)) setFrame(cardFront, SPIRITUAL_FA_FRAME);
                // else if(EVOLUTION_NAMES_RX.includes(cardName)) setFrame(cardFront, EVOLUTION_FRAME);
                // else if(EVOLUTION_SPELL_NAMES_RX.includes(cardName)) setFrame(cardFront, EVOLUTION_SPELL_FRAME);
                // else if(SPIRITUAL_NAMES_RX.includes(cardName)) setFrame(cardFront, SPIRITUAL_FRAME);
                // else if(TOKEN_NAMES_RX.includes(cardName)) setFrame(cardFront, TOKEN_FRAME);
                else matches2 = false;
                if(matches2)
                    return;
            }

            if(LINK_FUSION_NAMES_RX.includes(cardName)) setFrame(cardFront, LINK_FUSION_FRAME);
            else if(EVOLUTION_NAMES_RX.includes(cardName)) setFrame(cardFront, EVOLUTION_FRAME);
            else if(EVOLUTION_SPELL_NAMES_RX.includes(cardName)) setFrame(cardFront, EVOLUTION_SPELL_FRAME);
            else if(SPIRITUAL_NAMES_RX.includes(cardName)) setFrame(cardFront, SPIRITUAL_FRAME);
            else if(TOKEN_NAMES_RX.includes(cardName)) setFrame(cardFront, TOKEN_FRAME);
            else matches = false;

            if(matches)
                return;
        }

        if(creator == "YaniYa")
        {
            let matches = true;

            if(fullArtName)
            {
                let matches2 = true;
                if(LINK_FUSION_NAMES_YY.includes(cardName)) setFrame(cardFront, LINK_FUSION_FA_FRAME);
                else if(EVOLUTION_NAMES_YY.includes(cardName)) setFrame(cardFront, EVOLUTION_FA_FRAME);
                else if(SPIRITUAL_NAMES_YY.includes(cardName)) setFrame(cardFront, SPIRITUAL_FA_FRAME);
                // else if(EVOLUTION_NAMES_RX.includes(cardName)) setFrame(cardFront, EVOLUTION_FRAME);
                // else if(EVOLUTION_SPELL_NAMES_RX.includes(cardName)) setFrame(cardFront, EVOLUTION_SPELL_FRAME);
                // else if(SPIRITUAL_NAMES_RX.includes(cardName)) setFrame(cardFront, SPIRITUAL_FRAME);
                // else if(TOKEN_NAMES_RX.includes(cardName)) setFrame(cardFront, TOKEN_FRAME);
                else matches2 = false;
                if(matches2)
                    return;
            }
            if(LINK_FUSION_NAMES_YY.includes(cardName)) setFrame(cardFront, LINK_FUSION_FRAME);
            else if(EVOLUTION_NAMES_YY.includes(cardName)) setFrame(cardFront, EVOLUTION_FRAME);
            else if(EVOLUTION_SPELL_NAMES_YY.includes(cardName)) setFrame(cardFront, EVOLUTION_SPELL_FRAME);
            else if(SPIRITUAL_NAMES_YY.includes(cardName)) setFrame(cardFront, SPIRITUAL_FRAME);
            else if(TOKEN_NAMES_YY.includes(cardName)) setFrame(cardFront, TOKEN_FRAME);
            else matches = false;

            if(matches)
                return;
        }

        if(!fullArtName)
            return;
        if(color == "Effect") setFrame(cardFront, EFFECT_FA_FRAME);
        else if(color == "Ritual") setFrame(cardFront, RITUAL_FA_FRAME);
        else if(color == "Fusion") setFrame(cardFront, FUSION_FA_FRAME);
        
    }
    unsafeWindow.applyCustomFrame = applyCustomFrame;

//"CUSTOM" icon
    function removeCustom(cardFront)
    {
        setElement(cardFront, SMALL_CUSTOM, ".custom");
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

//Full Arts
    function applyFullArt(cardFront)
    {
        const fullArtName = FULL_ART_NAMES.find(name => cardFront.data('name').includes(name));
        const smallFullArtName = SMALL_FULL_ART_NAMES.find(name => cardFront.data('name').includes(name));

        if(!fullArtName)
        {
            cardFront.find('.card_border, .card_color').css('z-index', '0');
            cardFront.find('.monster_line').removeClass('monster-line-fullart');
            cardFront.find('[class*="_txt"]').removeClass('white-outline-text');
            cardFront.find('[class*="_lbl"]').removeClass('white-outline-text');
        }
        if(!smallFullArtName)
        {
            cardFront.find('.name_txt').removeClass('white-outline-text');
        }
        if(!fullArtName && !smallFullArtName)
        {
            cardFront.removeClass('full-art');
            return;
        }

        cardFront.data('pic', FULL_ART_URL + (fullArtName != undefined ? fullArtName : smallFullArtName) + ".png");
        cardFront.addClass('full-art');
        
        if(smallFullArtName)
        {
            cardFront.find('.name_txt').addClass('white-outline-text');
            return;
        }
        cardFront.find('.card_border, .card_color').css('z-index', '-1');
        cardFront.find('.monster_line').addClass('monster-line-fullart');
        cardFront.find('[class*="_txt"]').addClass('white-outline-text');
        cardFront.find('[class*="_lbl"]').addClass('white-outline-text');
    }
    unsafeWindow.applyFullArt = applyFullArt;

})();

$(document).ready(function () {

    $("#bulletin_txt, #yugioh_logo, #db_logo, #donate_btn, #welcome_btn, #forum_btn, #rules_btn, #blog_btn, #screenshot_btn, #mute_btn, .social_btn, .privacy_policy").css({
        display: "none",
        pointerEvents: "none",
        visibility: "hidden"
    });

    const brionac = document.getElementById("brionac_large");
    brionac.style.setProperty("width", "1075px", "important");
    brionac.style.setProperty("height", "1075px", "important");
    brionac.style.setProperty("left", "100px", "important");
    brionac.style.setProperty("top", "-150px", "important");

    const login = document.getElementById("login_box");
    login.style.setProperty("left", "-50px", "important");
    login.style.setProperty("top", "425px", "important");

    const duelBtn = document.getElementById("duel_btn");
    duelBtn.style.setProperty("left", "210px", "important");
    duelBtn.style.setProperty("top", "435px", "important");

});
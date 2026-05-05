window.PORTFOLIO_DATA = {
  brand: {
    name: "Keegan Edwards",
    title: "Senior Technical Artist",
    email: "mailto:keegan.edwards@gmail.com",
    linkedin: "https://www.linkedin.com/in/keegan-edwards/",
    resume: "https://media.licdn.com/dms/image/v2/D562DAQESXdsCxMWtnQ/profile-treasury-document-images_1280/B56ZVnUfPfGsAU-/1/1741195180682?e=1778716800&v=beta&t=D638ywrxIweerKjrIsqBV2RGnJujKU8NjDu6Hzi0f4I"
  },
  intro: {
    title: "Keegan Edwards, Senior Technical Artist",
    text: `Senior AAA Developer with a demonstrated history of working in the games industry. Strong arts and design professional skilled in Pipeline Creation for Unreal and Maya Deep knowledge of the entire art pipeline including Marvelous, ZBrush, Substance with regards to Art for games. Comfortable in a broad assortment of different artistic aesthetics ranging from Realism to Stylized art.`
  },
  infoWindows: {
    portfolio: {
      title: "Portfolio",
      text: `Project and image order is controlled by the arrays in content.js. Move an image object up or down in its images array to change gallery order without renaming files.`
    },
    about: {
    title: "Keegan Edwards",
    profileImage: "https://github.com/keeganedwards.png",
    text: `Senior Technical Artist with shipped work across character art, UI presentation, tools, optimization, and production pipelines.`
  }
  },
  games: [
    {
      id: "multiversus",
      title: "MultiVersus",
      banner: "Images/1Multiversus/Banner.jpg",
      projects: [
        {
          id: "multiversus-lighting-material-overhaul",
          title: "Lighting and Material Overhaul",
          text: `Visual and character lighting/material work for the MultiVersus presentation overhaul.`,
          images: [
            { src: "Images/1Multiversus/1LightingAndMaterialOverhaul/MultiVersusVisualAndCharacterLightingOverhaul.gif", title: "Lighting and Material Overhaul", text: "" }
          ]
        },
        {
          id: "multiversus-battle-pass-fighter-road",
          title: "Battle Pass and Fighter Road",
          text: `UI presentation, transitions, and reward flow work for Battle Pass and Fighter Road.`,
          images: [
            { src: "Images/1Multiversus/2BattlePassAndFighterRoad/BattlePass.gif", title: "Battle Pass", text: "" },
            { src: "Images/1Multiversus/2BattlePassAndFighterRoad/BattlePassTransitions.gif", title: "Battle Pass Transitions", text: "" },
            { src: "Images/1Multiversus/2BattlePassAndFighterRoad/FighterRoad.gif", title: "Fighter Road", text: "" },
            { src: "Images/1Multiversus/2BattlePassAndFighterRoad/StoreRewardPopup.gif", title: "Store Reward Popup", text: "" }
          ]
        },
        {
          id: "multiversus-store",
          title: "Store",
          text: `
Storefront presentation work including Asset Previews, Hover states, Icons, character presentation, reward transitions, and effects.
- Built store presentation transition and asset management system.
- Supported Reward Displays.
- Managed Icon resolution and Created tools for Reward/ Store Icons for Characters.`,
          images: [
            { src: "Images/1Multiversus/3Store/Start.gif", title: "Store Start", text: "" },
            { src: "Images/1Multiversus/3Store/Banners.gif", title: "Banners", text: "" },
            { src: "Images/1Multiversus/3Store/HoverOver.gif", title: "Hover States", text: "" },
            { src: "Images/1Multiversus/3Store/Icons.gif", title: "Icons", text: "" },
            { src: "Images/1Multiversus/3Store/IconsAndCharacters.gif", title: "Icons and Characters", text: "" },
            { src: "Images/1Multiversus/3Store/RewardTransitions.gif", title: "Reward Transitions", text: "" },
            { src: "Images/1Multiversus/3Store/VFX.gif", title: "VFX", text: "" }
          ]
        },
        {
          id: "multiversus-end-of-game",
          title: "End Of Game",
          text: `End-of-game presentation, layout, tools, and match transition work.`,
          images: [
            { src: "Images/1Multiversus/4EndOfGame/EndOfGame.gif", title: "End Of Game", text: "" },
            { src: "Images/1Multiversus/4EndOfGame/EOGTools.gif", title: "End Of Game Tools", text: "" },
            { src: "Images/1Multiversus/4EndOfGame/Layouts.gif", title: "Layouts", text: "" },
            { src: "Images/1Multiversus/4EndOfGame/MatchStart.gif", title: "Match Start", text: "" }
          ]
        },
        {
          id: "multiversus-icon-creator",
          title: "Icon Creator",
          text: `Icon and thumbnail tooling work for presentation-ready character and inventory assets.`,
          images: [
            { src: "Images/1Multiversus/5IconCreator/ThumbnailTool.gif", title: "Thumbnail Tool", text: "" },
            { src: "Images/1Multiversus/5IconCreator/IconCreator.gif", title: "Icon Creator", text: "" },
            { src: "Images/1Multiversus/5IconCreator/IconAdjustmentTool.png", title: "Icon Adjustment Tool", text: "" }
          ]
        }
      ]
    },
    {
      id: "the-last-of-us-part-1",
      title: "The Last of Us Part I",
      banner: "Images/2TheLastOfUsPart1/Banner.jpg",
      bannerPosition: "top",
      projects: [
        {
          id: "tlou-part-1-character-asset-browser",
          title: "Character Asset Browser",
          text: `Character asset browsing and production support work.`,
          images: [
            { src: "Images/2TheLastOfUsPart1/3CharacterAssetBrowser/ivan-miya-t1x-imiya-faction-hunter-z-game.jpg", title: "Character Asset Browser", text: "" }
          ]
        }
      ]
    },
    {
      id: "ashes-of-creation",
      title: "Ashes of Creation",
      bannerPosition: "top",
      banner: "Images/3AshesOfCreation/Banner.png",
      projects: [
        {
          id: "ashes-harbingers",
          title: "Harbingers",
          text: `Harbinger presentation and supporting technical art work.`,
          images: [
            { src: "Images/3AshesOfCreation/1Harbingers/Harbingers.png", title: "Harbingers", text: "" },
            { src: "Images/3AshesOfCreation/1Harbingers/maxresdefault.jpg", title: "Harbingers Preview", text: "" },
            { src: "Images/3AshesOfCreation/1Harbingers/Screenshot 2026-04-29 121732.png", title: "Harbingers Screenshot", text: "" }
          ]
        },
        {
          id: "ashes-hlods",
          title: "HLODs",
          text: `Hierarchical LOD setup and visual validation work.`,
          images: [
            { src: "Images/3AshesOfCreation/2Hlods/HlodPcitures2.png", title: "HLOD View", text: "" },
            { src: "Images/3AshesOfCreation/2Hlods/HlodPcitures4.png", title: "HLOD Comparison", text: "" }
          ]
        },
        {
          id: "ashes-optimization",
          title: "Optimization",
          text: `Optimization-oriented technical art work and scene validation.`,
          images: [
            { src: "Images/3AshesOfCreation/3Optimization/HlodPcitures1.png", title: "Optimization View", text: "" },
            { src: "Images/3AshesOfCreation/3Optimization/HlodPcitures3.png", title: "Optimization Comparison", text: "" }
          ]
        }
      ]
    },
    {
      id: "the-last-of-us-part-2",
      title: "The Last of Us Part II",
      banner: "Images/4TheLastOfUsPart2/Banner.jpg",
      bannerPosition: "top",
      projects: [
        {
          id: "tlou-part-2-ellie",
          title: "Ellie",
          thumbnailPosition: "top",
          text: `Character Work I did for The Last of Us Part 2.`,
          images: [
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-mid-color.jpg", title: "Mid Color", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-full-clay.jpg", title: "Full Clay", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-full-color.jpg", title: "Full Color", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-masked-color.jpg", title: "Full Masked Color", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-mid-clay.jpg", title: "Mid Clay", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-mid-masked.jpg", title: "Mid Masked", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-side-clay.jpg", title: "Side Clay", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-side-color.jpg", title: "Side Color", text: "" },
            { src: "Images/4TheLastOfUsPart2/1Ellie/keegan-edwards-side-masked.jpg", title: "Side Masked", text: "" }
          ]
        },
        {
          id: "tlou-part-2-prisoners",
          title: "Prisoners",
          text: `Prisoner character presentation work shown as an ordered gallery.`,
          images: [
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0000-layer-comp-1.jpg", title: "Prisoners 01", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0001-layer-comp-2.jpg", title: "Prisoners 02", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0002-layer-comp-3.jpg", title: "Prisoners 03", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0003-layer-comp-4.jpg", title: "Prisoners 04", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0004-layer-comp-5.jpg", title: "Prisoners 05", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0005-layer-comp-6.jpg", title: "Prisoners 06", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0006-layer-comp-7.jpg", title: "Prisoners 07", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0007-layer-comp-8.jpg", title: "Prisoners 08", text: "" },
            { src: "Images/4TheLastOfUsPart2/2Prisoners/keegan-edwards-prisoners-0008-layer-comp-9.jpg", title: "Prisoners 09", text: "" }
          ]
        },
        {
          id: "tlou-part-2-prisoners-escape",
          title: "Prisoners Escape",
          text: `Prisoners escape presentation work with captured and masked views.`,
          images: [
            { src: "Images/4TheLastOfUsPart2/3Prisoners Escape/keegan-edwards-prisonerscaptured-masked.jpg", title: "Captured Masked", text: "" },
            { src: "Images/4TheLastOfUsPart2/3Prisoners Escape/keegan-edwards-prisonerscaptured.jpg", title: "Captured", text: "" }
          ]
        }
      ]
    },
    {
      id: "call-of-duty",
      title: "Call of Duty: WW2",
      banner: "Images/5CallOfDuty/Banner.jpg",
      projects: [
        {
          id: "cod-splash",
          title: "United Front",
          text: `Key art and splash presentation work.`,
          images: [
            { src: "Images/5CallOfDuty/1Splash/XLWglaOdZUL8Dor76Hy1BQt8AuHB3UUb.jpg", title: "Splash Art", text: "" },
            { src: "Images/5CallOfDuty/1Splash/d20180430-007_DLC_3_Key_Art_1920x762_01.jpg", title: "DLC Key Art", text: "" },
          ]
        },
        {
          id: "cod-ingame",
          title: "In Game Characters",
          thumbnailPosition: "top",
          text: `In-game character presentation work.`,
          images: [
            { src: "Images/5CallOfDuty/3Ingame/EnglishComando.png", title: "English Commando", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/EnglishDesert.png", title: "English Desert", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/EnglishPilot.png", title: "English Pilot", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/GermanOfficer.png", title: "German Officer", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/GermanOfficer2.png", title: "German Officer 2", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/NetherlandsInfantry.png", title: "Netherlands Infantry", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/PolishInfantry.png", title: "Polish Infantry", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/RussianInfantry.png", title: "Russian Infantry", text: "" },
            { src: "Images/5CallOfDuty/3Ingame/RussianResistance.png", title: "Russian Resistance", text: "" }
          ]
        },
        {
          id: "cod-sculpts",
          title: "Character Sculpts",
          text: `Character sculpt presentation work.`,
          images: [
            { src: "Images/5CallOfDuty/2Sculpts/aus_infantry.png", title: "Australian Infantry", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/eng_summer.png", title: "English Summer", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/ger_super.png", title: "German Super", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/ger_valk.png", title: "German Valkyrie", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/net_infantry.png", title: "Netherlands Infantry", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/rus_female.png", title: "Russian Female", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/usa_monty.png", title: "USA Monty", text: "" },
            { src: "Images/5CallOfDuty/2Sculpts/usa_winter.png", title: "USA Winter", text: "" }
          ]
        },

      ]
    }
  ]
};




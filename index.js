const { Workshop } = require('ldcli');

module.exports = function() {
    var workshop = Workshop({  name: "Auther: FullBlast Academy of Game", slug: "fullblast-academy-of-game", description: "Make a cool game!" });

  workshop
    .Concept({ name: "Introduction", slug: "introduction", draftMode: false })
      .Action({ name: "Context", slug: "context", draftMode: false, visibilityLevel: 1 })
      .Action({ name: "Goal & Starting Point", slug: "goal-&-startingpoint", draftMode: false, visibilityLevel: 1 })
      .Action({ name: "Logistics - Test", slug: "logistics", draftMode: false, visibilityLevel: 1 })
      .Action({ name: "Internal IP Address", slug: "internal-ip-address", draftMode: true, visibilityLevel: 1 })
      .Action({ name: "Readings", slug: "readings", draftMode: false, visibilityLevel: 1 })
    .Concept({ name: "Adding Scenes", slug: "adding-scenes", draftMode: true })
      .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding Sprites And Groups", slug: "adding-sprites-and-groups", draftMode: true })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Attack", slug: "attack", draftMode: true, visibilityLevel: 2 })
      // .Action({ name: "Attack Scorecard", slug: "attack-scorecard", draftMode: true, visibilityLevel: 2 })
      // .Action({ name: "Defense", slug: "defense", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding Physics", slug: "adding-physics", draftMode: true })
      .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      .Action({ name: "No More Falling", slug: "no-more-falling", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding Movement", slug: "adding-movement", draftMode: true })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Attack", slug: "attack", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defense", slug: "defense", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding Animations", slug: "adding-animations", draftMode: true })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Attack", slug: "attack", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defense", slug: "defense", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding More Game Objects", slug: "adding-more-game-objects", draftMode: true })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Attack", slug: "attack", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defense", slug: "defense", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding More Collisions", slug: "adding-more-collisions", draftMode: false })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defend", slug: "defend", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding Sound Effects", slug: "adding-sound-effects", draftMode: false })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defend", slug: "defend", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Custom Sounds", slug: "custom-sounds", draftMode: false })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defend", slug: "defend", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Custom Sprites", slug: "custom-sprites", draftMode: false })
      // .Action({ name: "Backgound", slug: "backgound", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defend", slug: "defend", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Conclusion", slug: "conclusion", draftMode: false })
      .Action({ name: "Review", slug: "review", draftMode: false, visibilityLevel: 2 })

  return workshop;

}

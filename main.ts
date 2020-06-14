namespace SpriteKind {
    export const Tile = SpriteKind.create()
    export const CLEAN = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
b b 2 2 b b b b 9 2 4 4 b b b b 
b b 2 2 2 b b 9 9 2 4 2 b b b b 
b b 2 2 2 9 9 9 2 5 4 2 b b b 2 
b 2 4 4 2 9 9 4 4 2 9 9 b b 2 2 
b 2 4 5 4 2 9 9 9 9 9 9 2 2 2 2 
b 2 4 5 4 2 9 9 9 9 9 9 2 4 4 2 
b b 2 5 5 4 8 8 8 8 8 2 5 5 4 2 
b b 8 8 4 4 8 8 8 4 4 4 5 4 2 2 
b b 8 4 4 8 8 8 8 8 8 4 5 4 b b 
b b 8 8 8 8 8 8 8 8 8 8 4 8 b b 
b b 8 8 8 6 6 6 6 6 6 8 8 8 b b 
b b 8 8 8 6 6 6 6 6 6 8 8 8 b b 
b b 8 8 8 6 6 6 6 6 6 8 8 8 b b 
b b 8 8 8 6 6 6 6 9 6 8 8 8 b b 
b b 8 8 8 6 6 6 6 6 6 8 8 8 b b 
b b 8 8 8 6 6 6 6 6 6 8 8 8 b b 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
b b b b b b b b 9 b b b b b b b 
b b b b b b b b 9 b b b b b b b 
b b b b 6 9 9 9 9 b b b b b b b 
b b b 6 9 9 6 9 9 9 b b b b b b 
b b 6 9 9 9 9 9 6 6 9 9 b b b b 
b b 6 9 9 9 9 9 9 9 9 9 9 b b b 
b b 9 9 9 9 8 8 8 8 8 9 9 b b b 
b b 8 8 4 4 8 8 8 4 4 6 6 b b b 
b b 8 4 4 8 8 8 8 8 8 9 9 b b b 
b b 8 8 8 8 8 8 8 8 8 8 4 8 b b 
b b 8 8 8 6 6 6 6 6 6 8 8 8 b b 
b b 8 8 8 6 6 6 6 6 6 8 8 8 b b 
b b 8 8 8 6 6 6 6 6 6 8 8 8 b b 
b b 8 8 8 6 6 6 6 9 6 8 8 8 b b 
b b 8 8 8 6 6 6 6 6 6 8 8 8 b b 
b b 8 8 8 6 6 6 6 6 6 8 8 8 b b 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tile, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        animation.runMovementAnimation(
        sprite,
        animation.animationPresets(animation.bobbing),
        2000,
        false
        )
        info.changeScoreBy(1)
        sprite.say("Burn is clean", 2000)
        otherSprite.setImage(myTiles.tile5)
        otherSprite.setKind(SpriteKind.CLEAN)
    }
})
let MyTile: Sprite = null
game.setDialogFrame(img`
. . . . . c c c c c c c c c c c c c c . . . . . 
. . . c b d 1 1 1 1 1 1 1 1 1 1 1 1 d b c . . . 
. . c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c . . 
. c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c . 
. b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . 
c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c 
c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c 
. b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . 
. c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c . 
. . c d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d c . . 
. . b 1 1 d 1 1 1 1 1 1 1 1 1 1 1 1 d b c . . . 
. b 1 1 b c c c c c c c c c c c c c c . . . . . 
c c c c c . . . . . . . . . . . . . . . . . . . 
`)
game.showLongText("The City is   Ruin Destroyed but you can help us", DialogLayout.Center)
game.showLongText("Mission one (Stop the    burning House)", DialogLayout.Center)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100004040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040401`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile2,myTiles.tile3,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,myTiles.tile5],
            TileScale.Sixteen
        ))
let infinite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
infinite.z = 746
scene.cameraFollowSprite(infinite)
controller.moveSprite(infinite)
for (let index = 0; index < 30; index++) {
    MyTile = sprites.create(myTiles.tile3, SpriteKind.Tile)
    tiles.placeOnRandomTile(MyTile, sprites.vehicle.roadHorizontal)
}
forever(function () {
    if (info.score() >= 30) {
        game.over(true, effects.smiles)
    }
})
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})

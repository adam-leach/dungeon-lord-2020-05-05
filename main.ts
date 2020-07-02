namespace SpriteKind {
    export const House = SpriteKind.create()
    export const chest = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const NPC1 = SpriteKind.create()
    export const dungeon_level = SpriteKind.create()
    export const ghost = SpriteKind.create()
    export const NPC_wife = SpriteKind.create()
    export const first_level = SpriteKind.create()
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
    export const tile1 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
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
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    the_hero.setVelocity(0, 0)
    animation.stopAnimation(animation.AnimationTypes.All, the_hero)
    if (Talked_to_NPC_Wife) {
        animation.stopAnimation(animation.AnimationTypes.All, NPC_wife)
    }
})
function create_NPC1 () {
    NPC1 = sprites.create(img`
. . . . . f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. . f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . . f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e e f . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 6 6 6 f e e f . . 
. . . . f f f f f f . . . 
. . . . . . f f f . . . . 
`, SpriteKind.NPC1)
    tiles.placeOnTile(NPC1, tiles.getTileLocation(15, 13))
    NPC1.setVelocity(-25, 0)
    animation.runImageAnimation(
    NPC1,
    [img`
. . . . . f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. . f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . . f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e e f . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 6 6 6 f e e f . . 
. . . . f f f f f f . . . 
. . . . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . 
. . . . f f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. f f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . f f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 e e f f f . 
. . . f f e e 4 4 e f . . 
. . . f 7 7 e 4 4 e f . . 
. . f f 6 6 f e e f f f . 
. . f f f f f f f f f f . 
. . . f f f . . . f f . . 
`,img`
. . . . . . . . . . . . . 
. . . . f f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. f f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. f f f e e f b f e e f f 
. . f f 4 4 f 1 e 4 e f f 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e 4 4 4 . 
. . . f 7 7 7 7 e 4 4 e . 
. . f f 6 6 6 6 f e e f . 
. . f f f f f f f f f f . 
. . . f f f . . . f f . . 
`],
    200,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.first_level, function (sprite, otherSprite) {
    if (Talked_to_NPC_Wife) {
        level1_return.destroy()
        tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101150101150101010101151c130203030303030303030303040101131e050606060606060606060607150b150b050606060606060606060607151515150506060606060606060606070b15150b0506060909090909090909081515150b05060715151515150b151515151515150506070c0c0c151515150c0c151515150506070c0c150c0c0c0c0c0c0c0c150c0506070d0b0d0d0b0d0d0b0d0b0d0b0b0d0d0b0b0d0d0b0d0d0b0d0b0b0b0d0d0d0d170d200d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e0d0d0d0d0d0e0d0d0e0e0d0d0d0d0d0e0e0e0e0d0e0e0e0d0e0e0e0e0d0e0e0d0e0d0e0d0e1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a`,
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
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.rock1,sprites.castle.shrub,sprites.builtin.forestTiles9,sprites.builtin.forestTiles1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles13,myTiles.tile1,myTiles.tile2,sprites.castle.tileDarkGrass1,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.hazardWater,sprites.builtin.forestTiles7,sprites.builtin.forestTiles5,sprites.builtin.forestTiles15,sprites.builtin.forestTiles11,sprites.builtin.forestTiles8,sprites.builtin.forestTiles4],
            TileScale.Sixteen
        ))
        my_house = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . e 2 e 2 2 e 2 e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 2 2 e e e 2 2 e 2 e 2 2 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 e 2 2 e 2 e 2 2 e e e 2 2 e 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e . . . . . . . . . . . 
. . . . . . . . e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e . . . . . . . . 
. . . . . 2 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 2 . . . . . 
. . . 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 . . . 
4 c c 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 c c 4 
6 c 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 c 6 
4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4 
4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4 
4 c c 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 c c 4 
6 c 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 c 6 
4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4 
4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4 
4 c c 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 c c 4 
6 c 6 2 2 e e e e 2 2 e 2 2 e e e e 2 2 e e e 2 2 e e e 2 2 e e e e 2 2 e 2 2 e e e e 2 2 6 c 6 
4 6 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 6 4 
4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4 
4 c c 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 c c 4 
6 c 6 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 6 c 6 
4 6 6 2 2 e e e e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e e e e 2 2 6 6 4 
4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 6 6 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4 
4 c c e e e 2 2 e 2 2 e e e c c 6 6 6 6 6 c c c c c c 6 6 6 6 6 c c e e e 2 2 e 2 2 e e e c c 4 
6 c 6 2 2 e 2 2 e e e c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c e e e 2 2 e 2 2 6 c 6 
4 6 6 2 2 e 2 2 c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c 2 2 e 2 2 6 6 4 
4 6 6 2 2 c c 6 6 6 6 c c c 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 c c c 6 6 6 6 c c 2 2 6 6 4 
4 c c c 6 6 6 6 c c c 6 4 4 4 b c c 6 6 6 6 6 6 6 6 6 6 6 6 c c b 4 4 4 6 c c c 6 6 6 6 c c c 4 
c c c c c c c c 6 6 6 6 6 6 6 c b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b c 6 6 6 6 6 6 6 c c c c c c c c 
6 4 4 4 4 4 4 4 4 4 4 4 4 6 c 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 c 6 4 4 4 4 4 4 4 4 4 4 4 4 6 
6 6 c b 4 4 4 4 4 4 4 4 4 c b 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 b c 4 4 4 4 4 4 4 4 4 b c 6 6 
6 6 6 c c c c c c c c c c c d 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 d c c c c c c c c c c c 6 6 6 
6 6 6 6 4 4 4 4 4 4 4 4 4 c 1 1 6 e e e e e e e e e e e e e e 6 1 1 c 4 4 4 4 4 4 4 4 4 6 6 6 6 
6 6 6 e 2 2 2 2 2 2 2 e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e 2 2 2 2 2 2 2 e 6 6 6 
6 6 6 e e e e e e e e e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e e e e e e e e e 6 6 6 
6 6 6 e d d d d d d d e 4 c 6 6 f 4 e 4 e f f f f f f e 4 4 e e 6 6 c 4 e d d d d d d d e 6 6 6 
6 6 6 e d f f d f f d e 4 c 6 6 f 4 e f f f f f f f f f f 4 e e 6 6 c 4 e d f f d f f d e 6 6 6 
6 6 6 e d c c d c c d e 4 c 6 6 f 4 e f f f f f f f f f f e e e 6 6 c 4 e d c c d c c d e 6 6 6 
6 6 6 e d d d d d d d e 4 c 6 6 f 4 e e e e e e e e e e e e e e 6 6 c 4 e d d d d d d d e 6 6 6 
c 6 6 e d f f d f f d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d f f d f f d e 6 6 c 
c 6 6 e d c c d c c d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d c c d c c d e 6 6 c 
c c 6 6 6 6 6 6 6 6 6 6 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f e e e e 6 6 c 4 6 6 6 6 6 6 6 6 6 6 c c 
. c 6 6 4 4 4 4 4 4 4 4 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f f f f e 6 6 c 4 4 4 4 4 4 4 4 4 6 6 c . 
. . c 6 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 f 4 4 f e 6 6 c 4 e e e 4 e e e 4 6 c . . 
. . . c 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e f f e e 6 6 c 4 e e e 4 e e e 4 c . . . 
. . . . 6 4 4 4 4 4 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 4 4 4 4 4 6 . . . . 
. . . . . 6 4 e e e 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 e e e 4 6 . . . . . 
. . . . . . 6 c c c 6 6 6 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 6 6 6 c c c 6 . . . . . . 
`, SpriteKind.House)
        my_house.setPosition(50, 39)
        tiles.placeOnTile(the_hero, tiles.getTileLocation(14, 1))
        tiles.placeOnTile(NPC_wife, tiles.getTileLocation(14, 1))
        create_NPC1()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "left"
    animation.runImageAnimation(
    the_hero,
    [img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`,img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e d d 4 . . . . 
. . . f 2 2 2 2 e d d e . . . . 
. . f f 5 5 4 4 f e e f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`],
    50,
    true
    )
    the_hero.vx += -50
    if (Talked_to_NPC_Wife) {
        animation.runImageAnimation(
        NPC_wife,
        [img`
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f e 4 4 c c c f f f f . 
. f f e 4 4 f b f 4 4 f f . 
. . f f d d f 1 4 d 4 f . . 
. . . f d d d d 4 f f f . . 
. . . f e 4 4 4 e e f . . . 
. . . f 3 3 3 e d d 4 . . . 
. . . f 3 3 3 e d d e . . . 
. . . f 6 6 6 f e e f . . . 
. . . . f f f f f f . . . . 
. . . . . . f f f . . . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f c 4 4 c c c f f f f . 
. f f f 4 4 f b f 4 4 f f . 
. . f f d d f 1 4 d 4 f . . 
. . . f d d d e e f f f . . 
. . . f e 4 e d d 4 f . . . 
. . . f 3 3 e d d e f . . . 
. . f f 6 6 f e e f f f . . 
. . f f f f f f f f f f . . 
. . . f f f . . . f f . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f c 4 4 c c c f f f f . 
. f f f 4 4 f b f 4 4 f f . 
. . f c d d f 1 4 d 4 f f . 
. . . f d d d d 4 f f f . . 
. . . f e 4 4 4 e d d 4 . . 
. . . f 3 3 3 3 e d d e . . 
. . f f 6 6 6 6 f e e f . . 
. . f f f f f f f f f f . . 
. . . f f f . . . f f . . . 
`],
        50,
        true
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "down"
    animation.runImageAnimation(
    the_hero,
    [img`
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
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . . f e 4 d d d d 4 e f e . . 
. . f e f 2 2 2 2 e d d 4 e . . 
. . e 4 f 2 2 2 2 e d d e . . . 
. . . . f 4 4 5 5 f e e . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`,img`
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
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f e 4 d d d d 4 e f . . . 
. . e 4 d d e 2 2 2 2 f e f . . 
. . . e d d e 2 2 2 2 f 4 e . . 
. . . . e e f 5 5 4 4 f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . f f f . . . . 
`],
    50,
    true
    )
    the_hero.vy += 50
    if (Talked_to_NPC_Wife) {
        animation.runImageAnimation(
        NPC_wife,
        [img`
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. . f f d d d d d d f f . . 
. . e f e 4 4 4 4 e f e . . 
. e 4 f b 3 3 3 3 b f 4 e . 
. 4 d f 3 3 3 3 3 3 c d 4 . 
. 4 4 f 6 6 6 6 6 6 f 4 4 . 
. . . . f f f f f f . . . . 
. . . . f f . . f f . . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. . f f d d d d d 4 e f e . 
. f e f f b b b e d d 4 e . 
. e 4 f b 3 3 3 e d d e . . 
. . . f 6 6 6 6 f e e . . . 
. . . f f f f f f f . . . . 
. . . f f f . . . . . . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. e f e 4 d d d d d f f . . 
. e 4 d d e b b b f f e f . 
. . e d d e 3 3 b e f 4 e . 
. . . e e f 6 6 6 6 f . . . 
. . . . f f f f f f f . . . 
. . . . . . . . f f f . . . 
`],
        50,
        true
        )
    }
})
function create_ghost (the_ghost: Sprite, row_x: number, col_y: number, speed: number) {
    tiles.placeOnTile(the_ghost, tiles.getTileLocation(row_x, col_y))
    animation.runImageAnimation(
    the_ghost,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 f f f f . . . . . 
. . . . . . f f f c d b 1 b c 1 1 1 c f . . . . 
. . . . f c 1 1 1 c b f b f 1 b 1 b 1 f . . . . 
. . . . f 1 b 1 b 1 f f f f b f b f b f . . . . 
. . . . f b f b f f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . 
. . . . . . . . . . f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . f f f f 1 1 1 1 1 1 b f . . . . . . . 
. . . . f c 1 1 1 c d b 1 b d f f f . . . . . . 
. . . . f 1 b 1 b c b f b f c 1 1 1 c f . . . . 
. . . . f b f b f b f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . f f f f f f f b f b f . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . f f f c 1 1 1 1 1 1 1 f . . . . . . . 
. . . f c 1 1 1 c d 1 1 1 1 1 1 1 f . . . . . . 
. . . f 1 b 1 b 1 b 1 1 1 1 d d d f . . . . . . 
. . . f b f b f f c f 1 1 f c d d f . . . . . . 
. . . . . . f c f 1 1 1 1 1 1 b b f . . . . . . 
. . . . . . . c c b d b 1 b 1 f c f . . . . . . 
. . . . . . . f f f b f b f d f f . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . . . f f f f f f f f f f f . . . . . 
. . . . . . . . . f f f f f c 1 1 1 c f . . . . 
. . . . . . . . . f f f f f 1 b 1 b 1 f . . . . 
. . . . . . . . . . f f f f b f b f b f . . . . 
. . . . . . . . . . . f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . 7 . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . 7 . . f d d d 1 1 1 1 d d d f f . . . . . 
. . . 7 7 . f b d b f d d f b d b f c f . . . . 
. . . 7 7 7 f c d c f 1 1 f c d c f b f . . . . 
. . . . 7 7 f f f b d b 1 b d f f c f . . . . . 
. . . . f c b 1 b c f f f f f f . . . . . . . . 
. . . . f 1 c 1 c 1 f f f f f f . . . . . . . . 
. . . . f d f d f d f f f f f . . . . . . . . . 
. . . . . f . f . f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 1 f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f c d d 1 1 1 1 d d c f f . . . . . 
. . . . . . . f b c f 1 1 f c b f b b f . . . . 
. . . . . . . f f b d b 1 b d f f f f . . . . . 
. . . . . . . . f c b f b f d f . . . . . . . . 
. . . . . . . . f f f f f f f f . . . . . . . . 
. . . . . . f f f f f f f f f f . . . . . . . . 
. . . . . f c b 1 b c f f f f . . . . . . . . . 
. . . . . . f f b f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d 1 1 1 1 1 1 d d f . . . . . . 
. . . . . . f b d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f c d b f d d f b d b f . . . . . . 
. . . . . . . f b c f 1 1 f c b f f f . . . . . 
. . . . . . . f f b 1 1 1 1 b c f b c f . . . . 
. . . . . . . . f c d b 1 b d f b b b f . . . . 
. . . . . . . f f f f f f f f f f c f . . . . . 
. . . . . f c b 1 b c f f f f f . . . . . . . . 
. . . . . f 1 b 1 b 1 f f f f . . . . . . . . . 
. . . . . . f f b f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`],
    500,
    true
    )
    the_ghost.follow(the_hero, speed)
}
function Update_NPC1 () {
    if (NPC1.isHittingTile(CollisionDirection.Left)) {
        NPC1.setVelocity(25, 0)
        animation.runImageAnimation(
        NPC1,
        [img`
. . . . . . . . . . . . . 
. . . f f f f f f . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f f . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f f . 
f f e 4 e 1 f 4 4 f f . . 
. f f f e 4 4 4 4 f . . . 
. 4 4 4 e e e e f f . . . 
. e 4 4 e 7 7 7 7 f . . . 
. f e e f 6 6 6 6 f f . . 
. f f f f f f f f f f . . 
. . f f . . . f f f . . . 
`,img`
. . . . . . . . . . . . . 
. . . f f f f f f . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f f . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f f . . 
. f f f e e 4 4 4 f . . . 
. . f e 4 4 e e f f . . . 
. . f e 4 4 e 7 7 f . . . 
. f f f e e f 6 6 f f . . 
. f f f f f f f f f f . . 
. . f f . . . f f f . . . 
`,img`
. . . f f f f f . . . . . 
. f f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f c f f f c f f . . 
f c f f c c f f f c c f f 
f c c f f f f e f f f f f 
f f f f f f f e e f f f . 
f f e e f b f e e f f . . 
. f e 4 e 1 f 4 4 f . . . 
. f f f e 4 4 4 4 f . . . 
. . f e e e e e f f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . e 4 4 e 7 7 7 f . . . 
. . f e e f 6 6 6 f . . . 
. . . f f f f f f . . . . 
. . . . f f f . . . . . . 
`],
        200,
        true
        )
    } else if (NPC1.isHittingTile(CollisionDirection.Right)) {
        NPC1.setVelocity(-25, 0)
        animation.runImageAnimation(
        NPC1,
        [img`
. . . . . f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. . f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . . f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e e f . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 7 7 7 e 4 4 e . . 
. . . f 6 6 6 f e e f . . 
. . . . f f f f f f . . . 
. . . . . . f f f . . . . 
`,img`
. . . . . . . . . . . . . 
. . . . f f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. f f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. . f f e e f b f e e f f 
. . f f 4 4 f 1 e 4 e f . 
. . . f 4 4 4 e e f f f . 
. . . f f e e 4 4 e f . . 
. . . f 7 7 e 4 4 e f . . 
. . f f 6 6 f e e f f f . 
. . f f f f f f f f f f . 
. . . f f f . . . f f . . 
`,img`
. . . . . . . . . . . . . 
. . . . f f f f f f . . . 
. . . f f f f f f f f f . 
. . f f f c f f f f f f . 
. f f f c f f f c f f f f 
f f c c f f f c c f f c f 
f f f f f e f f f f c c f 
. f f f e e f f f f f f f 
. f f f e e f b f e e f f 
. . f f 4 4 f 1 e 4 e f f 
. . . f 4 4 4 4 e f f f . 
. . . f f e e e e 4 4 4 . 
. . . f 7 7 7 7 e 4 4 e . 
. . f f 6 6 6 6 f e e f . 
. . f f f f f f f f f f . 
. . . f f f . . . f f . . 
`],
        200,
        true
        )
    }
    if (the_hero.overlapsWith(NPC1) && !(talked_to_NPC1)) {
        talk_to_NPC1()
    }
    if (the_hero.overlapsWith(NPC1) && Talked_to_NPC_Wife) {
        game.showLongText("You've saved my wife! Thank you!", DialogLayout.Top)
        info.changeScoreBy(100)
        game.over(true, effects.hearts)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.chest, function (sprite, otherSprite) {
    otherSprite.setImage(img`
. b b b b b b b b b b b b b b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b b b b b b b d d b b b b b b b 
. b b b b b b c c b b b b b b . 
b c c c c c b c c b c c c c c b 
b c c c c c c b b c c c c c c b 
b c c c c c c c c c c c c c c b 
b c c c c c c c c c c c c c c b 
b b b b b b b b b b b b b b b b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`)
    music.powerUp.playUntilDone()
    info.changeScoreBy(10)
    if (otherSprite == chest2) {
        field_chest_open_yn = 1
    }
    if (otherSprite == dungeon_chest1) {
        info.changeLifeBy(1)
    }
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ghost, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(15)
    music.jumpDown.play()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    the_hero.setVelocity(0, 0)
    animation.stopAnimation(animation.AnimationTypes.All, the_hero)
    if (Talked_to_NPC_Wife) {
        animation.stopAnimation(animation.AnimationTypes.All, NPC_wife)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    the_hero.setVelocity(0, 0)
    animation.stopAnimation(animation.AnimationTypes.All, the_hero)
    if (Talked_to_NPC_Wife) {
        animation.stopAnimation(animation.AnimationTypes.All, NPC_wife)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (field_chest_open_yn) {
        music.magicWand.play()
        if (direction == "left") {
            projectile = sprites.createProjectileFromSprite(img`
. 2 2 . 
2 2 2 2 
2 2 2 2 
. 2 2 . 
`, the_hero, -100, 0)
        } else if (direction == "right") {
            projectile = sprites.createProjectileFromSprite(img`
. 2 2 . 
2 2 2 2 
2 2 2 2 
. 2 2 . 
`, the_hero, 100, 0)
        } else if (direction == "up") {
            projectile = sprites.createProjectileFromSprite(img`
. 2 2 . 
2 2 2 2 
2 2 2 2 
. 2 2 . 
`, the_hero, 0, -100)
        } else if (direction == "down") {
            projectile = sprites.createProjectileFromSprite(img`
. 2 2 . 
2 2 2 2 
2 2 2 2 
. 2 2 . 
`, the_hero, 0, 100)
        }
        pause(500)
    }
})
function create_NPC_Wife () {
    tiles.placeOnTile(NPC_wife, tiles.getTileLocation(62, 30))
    NPC_wife.setVelocity(-25, 0)
    animation.runImageAnimation(
    NPC_wife,
    [img`
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f e 4 4 c c c f f f f . 
. f f e 4 4 f b f 4 4 f f . 
. . f f d d f 1 4 d 4 f . . 
. . . f d d d d 4 f f f . . 
. . . f e 4 4 4 e e f . . . 
. . . f 3 3 3 e d d 4 . . . 
. . . f 3 3 3 e d d e . . . 
. . . f 6 6 6 f e e f . . . 
. . . . f f f f f f . . . . 
. . . . . . f f f . . . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f c 4 4 c c c f f f f . 
. f f f 4 4 f b f 4 4 f f . 
. . f f d d f 1 4 d 4 f . . 
. . . f d d d e e f f f . . 
. . . f e 4 e d d 4 f . . . 
. . . f 3 3 e d d e f . . . 
. . f f 6 6 f e e f f f . . 
. . f f f f f f f f f f . . 
. . . f f f . . . f f . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f c 4 4 c c c f f f f . 
. f f f 4 4 f b f 4 4 f f . 
. . f c d d f 1 4 d 4 f f . 
. . . f d d d d 4 f f f . . 
. . . f e 4 4 4 e d d 4 . . 
. . . f 3 3 3 3 e d d e . . 
. . f f 6 6 6 6 f e e f . . 
. . f f f f f f f f f f . . 
. . . f f f . . . f f . . . 
`],
    200,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.dungeon_level, function (sprite, otherSprite) {
    my_house.destroy()
    chest2.destroy()
    NPC1.destroy()
    tiles.setTilemap(tiles.createTilemap(
            hex`400020002428002a00000000000000000000000000000000000000000000000000000000000000000000000000290d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d2624002a00000000000000000000000000000000000000000000000000000000000000000000000000290d0d0d3d0d0d0d0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d0000002a00000000000000000000000000000000000000000000000000000000000000000000000000290d0d0e0e0e0e0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d290e0d2a00000000000000000000000000000000000000000000000000000000000000000000000000290d0d0e0e0d0d0d0d0e0e0d0d0d0d0d0d0d0d0d0e0d0d290d0e2a00000000000000000000000000000000000000000000000000000000000000000000000000290d0d0d0e0d0d0e0e0d0d0e0e0d0c0d0d0d0d0d0e0d0d290d0d2a00000000000000000000000000000000000000000000000000000000000000000000000000290d0e0e0d0d0e0e0e0e0e0e0e0d0d0d0d0d0d0e0d0d0d290e0d2a00000000000000000000000000000000000000000000000000000000000000000000000000290d0e0d0d0e0e0d0d0d0d0d0d0d0d0d0d0d0e0d0d0d0d290d0e3132323232323230000000000000000000000000000000000000000000000000000000000000290d0d0d0d0e0d0d0c0e0e0d0d0d0d0d0d0e0e0d0d0d0d290d0d3d0e0d0d0d3d0d2a000000000000000000000000000000000000000000000000000000000000290d0d0d0c0d0d0d0d0d0d0e0e0e0d0d0d0e0d0d0d0d0d290d3d0d0d0d3b0d0e0d2a000000000000000000000000000000000000000000000000000000000000290d0d0d0d0d0d0d0d0d0d0d0d0d0e0e0d0d0e0e0d0d0d290c0d0d0e0d0d0d0d0d2a000000000000000000000000000000000000000000000000000000000000290d0d0d0d0d0d3d0d0d0d0d3d0d0d0e0d0d0c0e0d0d0d2b2c2c2c2c2c2c1b0c3b2a00000000000000000000000000000000000000000000000000000000000029000c0c0d0d0d0d0d0d0d0d0d0d0d0e0d0d0d0e0e0d0d000000000000002d3c0d2a000000000000000000000000000000000000000000000000000000000000290d00001c2c2c2c2c2c1b0d0d0d0d0e0d0d0d0d0d0d0d000000000000002d0d0d2a000000000000000000000000000000000000000000000000000000000000290d0d0c3800000000002d0d0d0c0d0e0e0d0d0d0d0d0d000000000000002d0d3d2a000000000000000000000000000000000000000000000000000000000000290d0d003800000000002d0d0d0d0d0d0e0d0d0d0d0d0d000000000000002d3c0b2a000000000000000000000000000000000000000000000000000000000000290d0d003800000000002d0d0d0d0d0d0e0d0d0d0d0d0d000000000000002d0c002a00000000000000000000000000000000000000000000000000000000000029000d003800000000002d0d0d0d0d0d0e0d0d0d0d0d0d000000000000002d000b2a00000000000000000000000000000000000000000000000000000000000029000d003800000000002d0d0d0d0d0d0e0d0d0d0d0d0d000000000000002d00003132323232323232323232323232323232323232323232323232323232323233000d0e3800000000002d0d0d0e0e0e0e0c0d0d0d0d0d000000000000002d3d000d0d0d0b0e0d003d00000b00000000000d0d0d0d0b0b000000000000000d00000d0d003800000000002d0d0d0e0d0d0d0d0d0d0d0d0d000000000000002d0b000e000d0d000d0d0d00000c0d0d0d0c00000d0e0e0e0d0b0d0d0d0d000d0d0d0d0d000e3800000000002d0d0d0e0d0d0d0d0d0d0d0d0d000000000000002b2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c1b0e0e0000000000000e0000000000000e0000000e003800000000002d0d0d0e0e0d0d0d0d0d0d0d0d00000000000000000000000000000000000000000000002d000e1c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c2c3700000000002d0d0d0d0d0e0e0e0e0d0d0d0c00000000000000000000000000000000000000000000002d0d002a0000000000000000000000000000000000000000000000002d0d0d0c0d0d0e0e0d0d0d0d0d00000000000000000000000000343236323000000000002d000d2a0000000000000000000000000000000000000000000000002d0d0d0d0d0d0e0e0d0d3d0d0d000000000000000000000000002d0000002a00000000002d00002a0000000000000000000000000000000000000000000000002d0d0d0d0d0d0d0e0e0d0d0d0d000000000000000000000000002d0000002a00000000002d0d002a0000000000000000000000000000000000000000000000002d0d0d0d0d0d0d0d0e0e0d0d0d000000000000000000000000002d0000003132323232323300002a0000000000000000000000000000000000000000000000002d0d0d0d0d0e0e0e0d0d0c0d0d000000000000000000000000002d00000000000000000000000d2a0000000000000000000000000000000000000000000000002d0d0d0d0d0c0d0d0d0d0d0d0d000000000000000000000000002d003d000000003d00000d00002a0000000000000000000000000000000000000000000000002d0d0d0d0d0d0d0d0d0d0d0d0d000000000000000000000000002b2c2c2c2c2c2c2c2c2c2c2c2c370000000000000000000000000000000000000000000000002d0d0d0d0d0d0d0d0d0d0d0d0d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002d0d0d3d0d0d0d0d0d0d0d3d0d`,
            img`
. . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
2 . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . 
. . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . . . . . . . . . 
. . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . . . . . . . . . 
. . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . . . . . . . . . 
. . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . . . . . . . . . 
. . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . . . . . . . . . 
. . . . . . . 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 . . . . . 2 . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 2 . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . 2 2 2 2 2 2 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.dungeon.floorLight1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.doorLockedWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.floorLightMoss,sprites.dungeon.floorDark3,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight5,sprites.dungeon.floorMixed,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenOuterSouth2,sprites.builtin.forestTiles10,sprites.builtin.forestTiles5,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles7,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.chestClosed,sprites.dungeon.doorLockedNorth,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast1,sprites.dungeon.floorDark0,sprites.dungeon.floorLight2,sprites.dungeon.floorDark4,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark1],
            TileScale.Sixteen
        ))
    level1_return = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . f . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, SpriteKind.first_level)
    tiles.placeOnTile(level1_return, tiles.getTileLocation(0, 0))
    dungeon_chest1 = sprites.create(img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b d d b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.chest)
    tiles.placeOnTile(dungeon_chest1, tiles.getTileLocation(15, 26))
    tiles.placeOnTile(the_hero, tiles.getTileLocation(1, 1))
    scene.cameraShake(4, 500)
    create_NPC_Wife()
    ghost1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    create_ghost(ghost1, 8, 9, 30)
    ghost2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    create_ghost(ghost2, 20, 19, 60)
    ghost3 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    create_ghost(ghost3, 16, 28, 30)
    ghost4 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    create_ghost(ghost4, 32, 20, 44)
    g5 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    create_ghost(g5, 43, 11, 30)
    g6 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    create_ghost(g6, 53, 22, 30)
    g7 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    create_ghost(g7, 60, 15, 20)
    g8 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    create_ghost(g8, 61, 11, 40)
    g9 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    create_ghost(g9, 61, 6, 80)
    g10 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
    create_ghost(g10, 55, 1, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "right"
    animation.runImageAnimation(
    the_hero,
    [img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`,img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . 4 d d e 4 4 4 e f . . . 
. . . . e d d e 2 2 2 2 f . . . 
. . . . f e e f 4 4 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`],
    50,
    true
    )
    the_hero.vx += 50
    if (Talked_to_NPC_Wife) {
        animation.runImageAnimation(
        NPC_wife,
        [img`
. . . . . . . . . . . . . . 
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 c f f . 
. f f 4 4 f b f 4 4 f f f . 
. f f 4 d 4 1 f d d c f . . 
. . f f f 4 d d d d f . . . 
. . 4 d d e 4 4 4 e f . . . 
. . e d d e 3 3 3 3 f . . . 
. . f e e f 6 6 6 6 f f . . 
. . f f f f f f f f f f . . 
. . . f f . . . f f f . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 c f f . 
. f f 4 4 f b f 4 4 f f f . 
. . f 4 d 4 1 f d d f f . . 
. . f f f e e d d d f . . . 
. . . f 4 d d e 4 e f . . . 
. . . f e d d e 3 3 f . . . 
. . f f f e e f 6 6 f f . . 
. . f f f f f f f f f f . . 
. . . f f . . . f f f . . . 
`,img`
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 e f f . 
. f f 4 4 f b f 4 4 e f f . 
. . f 4 d 4 1 f d d f f . . 
. . f f f 4 d d d d f . . . 
. . . f e e 4 4 4 e f . . . 
. . . 4 d d e 3 3 3 f . . . 
. . . e d d e 3 3 3 f . . . 
. . . f e e f 6 6 6 f . . . 
. . . . f f f f f f . . . . 
. . . . . f f f . . . . . . 
`],
        50,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ghost, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 50)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    the_hero.setVelocity(0, 0)
    animation.stopAnimation(animation.AnimationTypes.All, the_hero)
    if (Talked_to_NPC_Wife) {
        animation.stopAnimation(animation.AnimationTypes.All, NPC_wife)
    }
})
function Update_NPC_Wife () {
    if (NPC_wife.isHittingTile(CollisionDirection.Left)) {
        NPC_wife.setVelocity(25, 0)
        animation.runImageAnimation(
        NPC_wife,
        [img`
. . . . . . . . . . . . . . 
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 c f f . 
. f f 4 4 f b f 4 4 f f f . 
. f f 4 d 4 1 f d d c f . . 
. . f f f 4 d d d d f . . . 
. . 4 d d e 4 4 4 e f . . . 
. . e d d e 3 3 3 3 f . . . 
. . f e e f 6 6 6 6 f f . . 
. . f f f f f f f f f f . . 
. . . f f . . . f f f . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 c f f . 
. f f 4 4 f b f 4 4 f f f . 
. . f 4 d 4 1 f d d f f . . 
. . f f f e e d d d f . . . 
. . . f 4 d d e 4 e f . . . 
. . . f e d d e 3 3 f . . . 
. . f f f e e f 6 6 f f . . 
. . f f f f f f f f f f . . 
. . . f f . . . f f f . . . 
`,img`
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 e f f . 
. f f 4 4 f b f 4 4 e f f . 
. . f 4 d 4 1 f d d f f . . 
. . f f f 4 d d d d f . . . 
. . . f e e 4 4 4 e f . . . 
. . . 4 d d e 3 3 3 f . . . 
. . . e d d e 3 3 3 f . . . 
. . . f e e f 6 6 6 f . . . 
. . . . f f f f f f . . . . 
. . . . . f f f . . . . . . 
`],
        200,
        true
        )
    } else if (NPC_wife.isHittingTile(CollisionDirection.Right)) {
        NPC_wife.setVelocity(-25, 0)
        animation.runImageAnimation(
        NPC_wife,
        [img`
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f e 4 4 c c c f f f f . 
. f f e 4 4 f b f 4 4 f f . 
. . f f d d f 1 4 d 4 f . . 
. . . f d d d d 4 f f f . . 
. . . f e 4 4 4 e e f . . . 
. . . f 3 3 3 e d d 4 . . . 
. . . f 3 3 3 e d d e . . . 
. . . f 6 6 6 f e e f . . . 
. . . . f f f f f f . . . . 
. . . . . . f f f . . . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f c 4 4 c c c f f f f . 
. f f f 4 4 f b f 4 4 f f . 
. . f f d d f 1 4 d 4 f . . 
. . . f d d d e e f f f . . 
. . . f e 4 e d d 4 f . . . 
. . . f 3 3 e d d e f . . . 
. . f f 6 6 f e e f f f . . 
. . f f f f f f f f f f . . 
. . . f f f . . . f f . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f c 4 4 c c c f f f f . 
. f f f 4 4 f b f 4 4 f f . 
. . f c d d f 1 4 d 4 f f . 
. . . f d d d d 4 f f f . . 
. . . f e 4 4 4 e d d 4 . . 
. . . f 3 3 3 3 e d d e . . 
. . f f 6 6 6 6 f e e f . . 
. . f f f f f f f f f f . . 
. . . f f f . . . f f . . . 
`],
        200,
        true
        )
    }
    if (the_hero.overlapsWith(NPC_wife) && !(Talked_to_NPC_Wife)) {
        Talked_to_NPC_Wife = 1
        info.changeScoreBy(50)
        game.showLongText("Thank you for saving me! Please take me back to my husband.", DialogLayout.Top)
        NPC_wife.follow(the_hero, 40)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "up"
    animation.runImageAnimation(
    the_hero,
    [img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f f 2 f e f . . 
. . f f f 2 f e e 2 2 f f f . . 
. . f e 2 f f e e 2 f e e f . . 
. f f e f f e e e f e e e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . . e f f f f f f f f 4 e . . 
. . . 4 f 2 2 2 2 2 e d d 4 . . 
. . . e f f f f f f e e 4 . . . 
. . . . f f f . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e f 2 f f f 2 f 2 e f . . 
. . f f f 2 2 e e f 2 f f f . . 
. . f e e f 2 e e f f 2 e f . . 
. f f e e e f e e e f f e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f e . . . 
. . 4 d d e 2 2 2 2 2 f 4 . . . 
. . . 4 e e f f f f f f e . . . 
. . . . . . . . . f f f . . . . 
`],
    50,
    true
    )
    the_hero.vy += -50
    if (Talked_to_NPC_Wife) {
        animation.runImageAnimation(
        NPC_wife,
        [img`
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c c c c c c c f . 
. f f c c c c c c c c f f . 
. f f f c c c c c c f f f . 
. f f f f f f f f f f f f . 
. . f f f f f f f f f f . . 
. . e f f f f f f f f e . . 
. e 4 f f f f f f f f 4 e . 
. 4 d f 3 3 3 3 3 3 c d 4 . 
. 4 4 f 6 6 6 6 6 6 f 4 4 . 
. . . . f f f f f f . . . . 
. . . . f f . . f f . . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c c c c c c f f . 
. f f c c c c c c c c f f . 
. f f c c c c c c f f f f . 
. f f f f f f f f f f f f . 
. . f f f f f f f f f f . . 
. . e f f f f f f f f e . . 
. . e f f f f f f f f 4 e . 
. . 4 f 3 3 3 3 3 e d d 4 . 
. . e f f f f f f e e 4 . . 
. . . f f f . . . . . . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f f c c c c c c c c c f . 
. f f c c c c c c c c f f . 
. f f f f c c c c c c f f . 
. f f f f f f f f f f f f . 
. . f f f f f f f f f f . . 
. . e f f f f f f f f e . . 
. e 4 f f f f f f f f e . . 
. 4 d d e 3 3 3 3 3 f 4 . . 
. . 4 e e f f f f f f e . . 
. . . . . . . . f f f . . . 
`],
        50,
        true
        )
    }
})
info.onLifeZero(function () {
    the_hero.destroy(effects.ashes, 500)
    game.over(false)
})
function talk_to_NPC1 () {
    talked_to_NPC1 = 1
    game.showLongText("Can you help me? My wife has been captured by an evil dungeon ghost. Will you go to the dungeon and rescue her for me? If you do I will pay you a large reward!", DialogLayout.Top)
    help_NPC1 = game.askForString("Will you help? Y/N", 1)
    if (help_NPC1 == "y") {
        tiles.setTilemap(tiles.createTilemap(
            hex`1000100001010101150101150101010101151c130203030303030303030303040101131e050606060606060606060607150b150b050606060606060606060607151515150506060606060606060606070b15150b0506060909090909090909081515150b05060715151515150b151515151515150506070c0c0c151515150c0c151515150506070c0c150c0c0c0c0c0c0c0c150c0506070d0b0d0d0b0d0d0b0d0b0d0b0b0d0d0b0b0d0d0b0d0d0b0d0b0b0b0d0d0d0d170d200d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e0d0d0d0d0d0e0d0d0e0e0d0d0d0d0d0e0e0e0e0d0e0e0e0d0e0e0e0e0d0e0e0d0e0d0e0d0e1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a`,
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
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.rock1,sprites.castle.shrub,sprites.builtin.forestTiles9,sprites.builtin.forestTiles1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles13,myTiles.tile1,myTiles.tile2,sprites.castle.tileDarkGrass1,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.hazardWater,sprites.builtin.forestTiles7,sprites.builtin.forestTiles5,sprites.builtin.forestTiles15,sprites.builtin.forestTiles11,sprites.builtin.forestTiles8,sprites.builtin.forestTiles4],
            TileScale.Sixteen
        ))
        dungeon_level = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . f . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
`, SpriteKind.dungeon_level)
        tiles.placeOnTile(dungeon_level, tiles.getTileLocation(15, 0))
        level1_ghost = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.ghost)
        create_ghost(level1_ghost, 14, 1, 40)
    }
}
let level1_ghost: Sprite = null
let dungeon_level: Sprite = null
let help_NPC1 = ""
let g10: Sprite = null
let g9: Sprite = null
let g8: Sprite = null
let g7: Sprite = null
let g6: Sprite = null
let g5: Sprite = null
let ghost4: Sprite = null
let ghost3: Sprite = null
let ghost2: Sprite = null
let ghost1: Sprite = null
let projectile: Sprite = null
let dungeon_chest1: Sprite = null
let level1_return: Sprite = null
let NPC1: Sprite = null
let the_hero: Sprite = null
let NPC_wife: Sprite = null
let chest2: Sprite = null
let my_house: Sprite = null
let Talked_to_NPC_Wife = 0
let talked_to_NPC1 = 0
let direction = ""
let field_chest_open_yn = 0
info.setScore(0)
info.setLife(3)
field_chest_open_yn = 0
direction = ""
talked_to_NPC1 = 0
Talked_to_NPC_Wife = 0
tiles.setTilemap(tiles.createTilemap(
            hex`100010000101010115010115010101010115222202030303030303030303030401012222050606060606060606060607150b150b050606060606060606060607151515150506060606060606060606070b15150b0506060909090909090909081515150b05060715151515150b151515151515150506070c0c0c151515150c0c151515150506070c0c150c0c0c0c0c0c0c0c150c0506070d0b0d0d0b0d0d0b0d0b0d0b0b0d0d0b0b0d0d0b0d0d0b0d0b0b0b0d0d0d0d170d200d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e0d0d0d0d0d0e0d0d0e0e0d0d0d0d0d0e0e0e0e0d0e0e0e0d0e0e0e0e0d0e0e0d0e0d0e0d0e1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a1a`,
            img`
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.rock1,sprites.castle.shrub,sprites.builtin.forestTiles9,sprites.builtin.forestTiles1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles13,myTiles.tile1,myTiles.tile2,sprites.castle.tileDarkGrass1,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.hazardWater,sprites.builtin.forestTiles7,sprites.builtin.forestTiles5,sprites.builtin.forestTiles15,sprites.builtin.forestTiles11,sprites.builtin.forestTiles8,sprites.builtin.forestTiles4,sprites.builtin.forestTiles12,sprites.dungeon.floorLight5],
            TileScale.Sixteen
        ))
my_house = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . e 2 e 2 2 e 2 e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 2 2 e e e 2 2 e 2 e 2 2 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 e 2 2 e 2 e 2 2 e e e 2 2 e 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e . . . . . . . . . . . 
. . . . . . . . e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e . . . . . . . . 
. . . . . 2 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 2 . . . . . 
. . . 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 . . . 
4 c c 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 c c 4 
6 c 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 c 6 
4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4 
4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4 
4 c c 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 c c 4 
6 c 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 c 6 
4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4 
4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4 
4 c c 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 c c 4 
6 c 6 2 2 e e e e 2 2 e 2 2 e e e e 2 2 e e e 2 2 e e e 2 2 e e e e 2 2 e 2 2 e e e e 2 2 6 c 6 
4 6 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 6 4 
4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4 
4 c c 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 c c 4 
6 c 6 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 6 c 6 
4 6 6 2 2 e e e e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e e e e 2 2 6 6 4 
4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 6 6 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4 
4 c c e e e 2 2 e 2 2 e e e c c 6 6 6 6 6 c c c c c c 6 6 6 6 6 c c e e e 2 2 e 2 2 e e e c c 4 
6 c 6 2 2 e 2 2 e e e c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c e e e 2 2 e 2 2 6 c 6 
4 6 6 2 2 e 2 2 c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c 2 2 e 2 2 6 6 4 
4 6 6 2 2 c c 6 6 6 6 c c c 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 c c c 6 6 6 6 c c 2 2 6 6 4 
4 c c c 6 6 6 6 c c c 6 4 4 4 b c c 6 6 6 6 6 6 6 6 6 6 6 6 c c b 4 4 4 6 c c c 6 6 6 6 c c c 4 
c c c c c c c c 6 6 6 6 6 6 6 c b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b c 6 6 6 6 6 6 6 c c c c c c c c 
6 4 4 4 4 4 4 4 4 4 4 4 4 6 c 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 c 6 4 4 4 4 4 4 4 4 4 4 4 4 6 
6 6 c b 4 4 4 4 4 4 4 4 4 c b 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 b c 4 4 4 4 4 4 4 4 4 b c 6 6 
6 6 6 c c c c c c c c c c c d 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 d c c c c c c c c c c c 6 6 6 
6 6 6 6 4 4 4 4 4 4 4 4 4 c 1 1 6 e e e e e e e e e e e e e e 6 1 1 c 4 4 4 4 4 4 4 4 4 6 6 6 6 
6 6 6 e 2 2 2 2 2 2 2 e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e 2 2 2 2 2 2 2 e 6 6 6 
6 6 6 e e e e e e e e e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e e e e e e e e e 6 6 6 
6 6 6 e d d d d d d d e 4 c 6 6 f 4 e 4 e f f f f f f e 4 4 e e 6 6 c 4 e d d d d d d d e 6 6 6 
6 6 6 e d f f d f f d e 4 c 6 6 f 4 e f f f f f f f f f f 4 e e 6 6 c 4 e d f f d f f d e 6 6 6 
6 6 6 e d c c d c c d e 4 c 6 6 f 4 e f f f f f f f f f f e e e 6 6 c 4 e d c c d c c d e 6 6 6 
6 6 6 e d d d d d d d e 4 c 6 6 f 4 e e e e e e e e e e e e e e 6 6 c 4 e d d d d d d d e 6 6 6 
c 6 6 e d f f d f f d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d f f d f f d e 6 6 c 
c 6 6 e d c c d c c d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d c c d c c d e 6 6 c 
c c 6 6 6 6 6 6 6 6 6 6 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f e e e e 6 6 c 4 6 6 6 6 6 6 6 6 6 6 c c 
. c 6 6 4 4 4 4 4 4 4 4 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f f f f e 6 6 c 4 4 4 4 4 4 4 4 4 6 6 c . 
. . c 6 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 f 4 4 f e 6 6 c 4 e e e 4 e e e 4 6 c . . 
. . . c 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e f f e e 6 6 c 4 e e e 4 e e e 4 c . . . 
. . . . 6 4 4 4 4 4 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 4 4 4 4 4 6 . . . . 
. . . . . 6 4 e e e 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 e e e 4 6 . . . . . 
. . . . . . 6 c c c 6 6 6 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 6 6 6 c c c 6 . . . . . . 
`, SpriteKind.House)
my_house.setPosition(50, 39)
chest2 = sprites.create(img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b d d b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.chest)
chest2.setPosition(136, 23)
create_NPC1()
NPC_wife = sprites.create(img`
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
`, SpriteKind.NPC_wife)
the_hero = sprites.create(img`
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
scene.cameraFollowSprite(the_hero)
game.splash("Welcome to Dungeon Lord!")
effects.confetti.startScreenEffect(1000)
music.playMelody("E B C5 A B G A F ", 110)
game.onUpdate(function () {
    Update_NPC1()
    Update_NPC_Wife()
})

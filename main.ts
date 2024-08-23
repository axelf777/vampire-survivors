function paus () {
    game.pushScene()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.MovingRight))) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .......fff..............
            ....fffff2f.............
            ..ffeeeee22ff...........
            .ffeeeeee222ff..........
            .feeeefffeeeef..........
            .fffffeee2222ef.........
            fffe222fffffe2f.........
            fffffffffeeefff.....cc..
            fefe44ebbf44eef...ccdc..
            .fee4d4bbfddef..ccddcc..
            ..feee4dddddfeecdddc....
            ...f2222222eeddcdcc.....
            ...f444445e44ddccc......
            ...ffffffffeeee.........
            ...fff...ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            .......ff...............
            ....ffff2ff.............
            ..ffeeeef2ff............
            .ffeeeeef22ff...........
            .feeeeffeeeef...........
            .fffffee2222ef..........
            fffe222ffffe2f..........
            ffffffffeeefff..........
            fefe44ebf44eef..........
            .fee4d4bfddef...........
            ..feee4dddee.c..........
            ...f2222eeddeccccccc....
            ...f444e44ddecddddd.....
            ...fffffeeee.ccccc......
            ..ffffffff...c..........
            ..fff..ff...............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef............
            .ffffee2222ef...........
            .fe222ffffe2f...........
            fffffffeeefff...........
            ffe44ebf44eef...........
            fee4d41fddef............
            .feee4ddddf.............
            ..fdde444ef.............
            ..fdde22ccc.............
            ...eef22cdc.............
            ...f4444cddc............
            ....fffffcddc...........
            .....fff..cddc..........
            ...........cdc..........
            ............cc..........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        projektilVänlig = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `, mySprite, 75, 0)
        pause(200)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.MovingLeft))) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ..............fff.......
            .............f2fffff....
            ...........ff22eeeeeff..
            ..........ff222eeeeeeff.
            ..........feeeefffeeeef.
            .........fe2222eeefffff.
            .........f2efffff222efff
            ..cc.....fffeeefffffffff
            ..cdcc...fee44fbbe44efef
            ..ccddcc..feddfbb4d4eef.
            ....cdddceefddddd4eeef..
            .....ccdcddee2222222f...
            ......cccdd44e544444f...
            .........eeeeffffffff...
            .............ff...fff...
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........c.eeddd4eeef..
            ....ccccccceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ...........fffeeefffffff
            ...........fee44fbe44eff
            ............feddf14d4eef
            .............fdddd4eeef.
            .............fe444eddf..
            .............ccc22eddf..
            .............cdc22fee...
            ............cddc4444f...
            ...........cddcfffff....
            ..........cddc..fff.....
            ..........cdc...........
            ..........cc............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        projektilVänlig = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `, mySprite, -75, 0)
        pause(200)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.MovingUp))) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ......ffff..............
            ....ffeeeeff............
            ...feeeffeeef...........
            ..fffff22fffff..........
            ..ffe2e22e2eff..........
            ..fe2f2ff2f2ef..........
            ..fff22ee22fff..........
            .ffef2feef2feff.........
            .feeffeeeefeeef.........
            ..feeeeeeeeeef..........
            ...feeeeeeeef...........
            ..e4ffffffff4e..........
            ..4df222222fd4..........
            ..44f444444f44..........
            .....ffffff.............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .....ffff...............
            ...ffeeeeff.............
            ..feeeffeeef............
            ..ffff22ffff............
            .ffe2e22e2eff...........
            .fe2f2fff2fef...........
            .fff2fee22fff...........
            .fe2ffee2feef...........
            ffeffeeefeeeff..........
            ffeeeeeeeeeefdf.........
            ..feeeeeeeeffbf.........
            ..effffffff4fbf.........
            ..4f22222eddfcf.........
            ..effffffee4ff..........
            ...fff..................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            .....ffff...............
            ...ffeeeeff.............
            ..feeeffeeef............
            .fffff22fffff...........
            .ffe2e22e2eff...........
            .fe2f2ff2f2ef...........
            .fff22ee22fff...........
            ffef2feef2feff..........
            feeffeeeefeeef..........
            .feeeeeeeeeef...........
            ..feeeeeeeef............
            .e4ffffffff4e...........
            .4df222222fd4...........
            .44f444444f44...........
            ....ffffff..............
            ....ff..ff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .....ffff...............
            ...ffeeeeff.............
            ..feeeffeeef............
            ..ffff22ffff............
            .ffe2e22e2eff...........
            .fef2fff2f2ef...........
            .fff22eef2fff...........
            .feef2eeff2ef...........
            .feeefeeeffeff..........
            .feeeeeeeeeeff..........
            .ffeeeeeeeef............
            .f4ffffffffe............
            .fdde22222f4............
            .f4eeffffffe............
            ........fff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        projektilVänlig = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `, mySprite, 0, -75)
        pause(200)
    } else {
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            .....ffff...............
            ...fff22fff.............
            ..fff2222fff............
            .fffeeeeeefff...........
            .ffe222222eef...........
            .fe2ffffff2ef...........
            .ffffeeeeffff...........
            ffefbf44fbfeff..........
            fee41fddf14eef..........
            .ffffdddddeef...........
            fddddf444eef............
            fbbbbf2222f4e...........
            fbbbbf2222fd4...........
            .fccf45544f44...........
            ..ffffffff..............
            ....ff..ff..............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff..........
            .ffefbf44fbfeff.........
            .fee41fddf14eef.........
            fdfeeddddd4eff..........
            fbffee444edd4e..........
            fbf4f2222edde...........
            fcf.f22cccee............
            .ff.f44cdc4f............
            ....fffddcff............
            .....fddcff.............
            ....cddc................
            ....cdc.................
            ....cc..................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            .......ff...............
            .....ff22ff.............
            ...fff2222fff...........
            ..fff222222fff..........
            ..fff222222fff..........
            ..feeeeeeeeeeff.........
            .ffe22222222eff.........
            .fffffeeeefffff.........
            fdfefbf44fbfeff.........
            fbfe41fddf14ef..........
            fbffe4dddd4efe..........
            fcfef22222f4e...........
            .ff4f44554f4e...........
            ....ffffffdde...........
            .....ffffedde...........
            ..........ee............
            .........ccc............
            ........cc1cc...........
            .........c1c............
            .........c1c............
            .........c1c............
            .........c1c............
            `,img`
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf44fbfeff....cddc.
            .ffefbf44fbfeff...cddc..
            .fee4dddddd4eef.ccddc...
            fdfeeddddd4eeffecddc....
            fbffee4444ee4fddccc.....
            fbf4f222222f1edde.......
            fcf.f222222f44ee........
            .ff.f445544f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
        projektilVänlig = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `, mySprite, 0, 75)
        pause(200)
    }
})
info.onScore(100, function () {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
info.onScore(1, function () {
    paus()
    textSprite = textsprite.create("Två extra projektiler.", 1, 2)
    textNedreSprite = textsprite.create("Uppåt pil.", 1, 2)
    textSprite.setPosition(80, 9)
    textNedreSprite.setPosition(80, 29)
    textSprite2 = textsprite.create("Rör dig 50% snabbare.", 1, 2)
    textSprite2 = textsprite.create("Nedåt pil.", 1, 2)
    textSprite2.setPosition(80, 57)
    textSprite3 = textsprite.create("Få 5 HP. Vänster pil", 1, 2)
    textSprite3.setPosition(78, 95)
    textSprite.setMaxFontHeight(1)
    textSprite2.setMaxFontHeight(1)
    textSprite3.setMaxFontHeight(1)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "GAME OVER!")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(fiender, effects.fountain, 500)
    sprites.destroy(projektilVänlig)
    info.changeScoreBy(1)
})
function rörelse () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        ......ffff..............
        ....ffeeeeff............
        ...feeeffeeef...........
        ..fffff22fffff..........
        ..ffe2e22e2eff..........
        ..fe2f2ff2f2ef..........
        ..fff22ee22fff..........
        .ffef2feef2feff.........
        .feeffeeeefeeef.........
        ..feeeeeeeeeef..........
        ...feeeeeeeef...........
        ..e4ffffffff4e..........
        ..4df222222fd4..........
        ..44f444444f44..........
        .....ffffff.............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        .....ffff...............
        ...ffeeeeff.............
        ..feeeffeeef............
        ..ffff22ffff............
        .ffe2e22e2eff...........
        .fe2f2fff2fef...........
        .fff2fee22fff...........
        .fe2ffee2feef...........
        ffeffeeefeeeff..........
        ffeeeeeeeeeefdf.........
        ..feeeeeeeeffbf.........
        ..effffffff4fbf.........
        ..4f22222eddfcf.........
        ..effffffee4ff..........
        ...fff..................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        .....ffff...............
        ...ffeeeeff.............
        ..feeeffeeef............
        .fffff22fffff...........
        .ffe2e22e2eff...........
        .fe2f2ff2f2ef...........
        .fff22ee22fff...........
        ffef2feef2feff..........
        feeffeeeefeeef..........
        .feeeeeeeeeef...........
        ..feeeeeeeef............
        .e4ffffffff4e...........
        .4df222222fd4...........
        .44f444444f44...........
        ....ffffff..............
        ....ff..ff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        .....ffff...............
        ...ffeeeeff.............
        ..feeeffeeef............
        ..ffff22ffff............
        .ffe2e22e2eff...........
        .fef2fff2f2ef...........
        .fff22eef2fff...........
        .feef2eeff2ef...........
        .feeefeeeffeff..........
        .feeeeeeeeeeff..........
        .ffeeeeeeeef............
        .f4ffffffffe............
        .fdde22222f4............
        .f4eeffffffe............
        ........fff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        ......ffffff............
        ....ffeeeef2f...........
        ...ffeeeef222f..........
        ...feeeffeeeef..........
        ...ffffee2222ef.........
        ...fe222ffffe2f.........
        ..fffffffeeefff.........
        ..ffe44ebf44eef.........
        ..fee4d41fddef..........
        ...feee4ddddf...........
        ....ffee444ef...........
        .....4dde222f...........
        .....edde222f...........
        .....feef455f...........
        ......ffffff............
        .......fff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ......ffffff............
        ....ffeeeef2f...........
        ...ffeeeef222f..........
        ...feeeffeeeef..........
        ...ffffee2222ef.........
        ...fe222ffffe2f.........
        ..fffffffeeefff.........
        ..ffe44ebf44eef.........
        ..fee4d41fddef..........
        ...feeeeedddf...........
        .....f4dde4ef...........
        .....fedde22f...........
        ....fffeef55ff..........
        ....ffffffffff..........
        .....ff...fff...........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ......ffffff............
        ....ffeeeef2f...........
        ...ffeeeef222f..........
        ...feeeffeeeef..........
        ...ffffee2222ef.........
        ...fe222ffffe2f.........
        ..fffffffeeefff.........
        ..ffe44ebf44eef.........
        ..fee4d41fddef..........
        ...feee4ddddf...........
        ....ffee444ef...........
        .....4dde222f...........
        .....edde222f...........
        .....feef455f...........
        ......ffffff............
        .......fff..............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ......ffffff............
        ....ffeeeef2f...........
        ...ffeeeef222f..........
        ...feeeffeeeef..........
        ...ffffee2222ef.........
        ...fe222ffffe2f.........
        ..fffffffeeefff.........
        ..ffe44ebf44eef.........
        ..fee4d41fddef..........
        ...feee4ddddf...........
        ....4dde444ef...........
        ....edde2222f...........
        ....feef4455ff..........
        ....ffffffffff..........
        .....ff...fff...........
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        ....ffffff..............
        ...f2feeeeff............
        ..f222feeeeff...........
        ..feeeeffeeef...........
        .fe2222eeffff...........
        .f2effff222ef...........
        .fffeeefffffff..........
        .fee44fbe44eff..........
        ..feddf14d4eef..........
        ...fdddd4eeef...........
        ...fe444eeff............
        ...f222edd4.............
        ...f222edde.............
        ...f554feef.............
        ....ffffff..............
        ......fff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ....ffffff..............
        ...f2feeeeff............
        ..f222feeeeff...........
        ..feeeeffeeef...........
        .fe2222eeffff...........
        .f2effff222ef...........
        .fffeeefffffff..........
        .fee44fbe44eff..........
        ..feddf14d4eef..........
        ...fdddeeeeef...........
        ...fe4edd4f.............
        ...f22eddef.............
        ..ff55feefff............
        ..ffffffffff............
        ...fff...ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ....ffffff..............
        ...f2feeeeff............
        ..f222feeeeff...........
        ..feeeeffeeef...........
        .fe2222eeffff...........
        .f2effff222ef...........
        .fffeeefffffff..........
        .fee44fbe44eff..........
        ..feddf14d4eef..........
        ...fdddd4eeef...........
        ...fe444eeff............
        ...f222edd4.............
        ...f222edde.............
        ...f554feef.............
        ....ffffff..............
        ......fff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ....ffffff..............
        ...f2feeeeff............
        ..f222feeeeff...........
        ..feeeeffeeef...........
        .fe2222eeffff...........
        .f2effff222ef...........
        .fffeeefffffff..........
        .fee44fbe44eff..........
        ..feddf14d4eef..........
        ...fdddd4eeef...........
        ...fe444edd4............
        ...f2222edde............
        ..ff5544feef............
        ..ffffffffff............
        ...fff...ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        ..ffffdddddeef..........
        .fddddf444eef...........
        .fbbbbf2222f4e..........
        .fbbbbf2222fd4..........
        ..fccf45544f44..........
        ...ffffffff.............
        .....ff..ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        .ffe2ffffff2eff.........
        .fffffeeeefffff.........
        ..fefbf44fbfef..........
        .ffe41fddf14ef..........
        fdffe4dddd4efe..........
        fbfef2222edd4e..........
        fbf4f2222edde...........
        fcf.f4455fee............
        .ff.fffffff.............
        ....fff.................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..fee222222eff..........
        .ffe2ffffff2eff.........
        .fffffeeeefffff.........
        ..fefbf44fbfef..........
        ..fe41fddf14ef..........
        ..effffddd4ef...........
        ..fddddf222fef..........
        ..fbbbbf222f4e..........
        ..fbbbbf544f............
        ...fccffffff............
        ....ff...fff............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..fee222222eff..........
        .ffe2ffffff2eff.........
        .fffffeeeefffff.........
        ..fefbf44fbfef..........
        ..fe41fddf14eff.........
        ..efe4dddd4effdf........
        ..e4dde2222fefbf........
        ...edde2222f4fbf........
        ....eef5544f.fcf........
        .....fffffff.ff.........
        .........fff............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
}
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let textNedreSprite: TextSprite = null
let textSprite: TextSprite = null
let projektilVänlig: Sprite = null
let fiender: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
fiender = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite, 100, 100)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
mySprite.sayText(":)", 5000, true)
characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
forever(function () {
    rörelse()
})

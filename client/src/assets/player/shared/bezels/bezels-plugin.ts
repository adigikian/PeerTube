import videojs from 'video.js'
import { PauseBezel } from './pause-bezel'

const Plugin = videojs.getPlugin('plugin')

class BezelsPlugin extends Plugin {

  constructor (player: videojs.Player, options?: videojs.ComponentOptions) {
    super(player)

    this.player.ready(() => {
      player.addClass('vjs-bezels')
    })

    player.addChild(new PauseBezel(player, options))
  }
}

videojs.registerPlugin('bezels', BezelsPlugin)

export { BezelsPlugin }

import 'modern-normalize'
import _ from 'lodash'
import './styles.scss'
import youtubeThumbnail from 'youtube-thumbnail-downloader-hd'

console.log(_.chunk([1, 2, 6, 7, 8, 9], 2))

console.log(youtubeThumbnail('https://www.youtube.com/watch?v=myvJNVp6o5I'))

document.body.append('TODO: make something')

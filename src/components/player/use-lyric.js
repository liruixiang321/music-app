import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'
import { getLyric } from '@/service/song'
import Lyric from 'lyric-parser'

export default function useLyric({ songReady, currentTime }) {
  const currentLyric = ref(null)
  const currentLineNum = ref(0)
  const pureMusicLyric = ref('')
  const playingLyric = ref('')
  const lyricScrollRef = ref(null)
  const lyricListRef = ref(null)

  const store = useStore()
  const currentSong = computed(() => store.getters.currentSong)

  watch(currentSong, async (newSong) => {
    if (!newSong.url || !newSong.id) {
      return
    }
    stopLyric()
    currentLyric.value = null
    currentLineNum.value = 0
    pureMusicLyric.value = ''
    playingLyric.value = ''

    const lyric = await getLyric(newSong)
    console.log(lyric)
    store.commit('addSongLyric', {
      song: newSong,
      lyric
    })
    if (currentSong.value.lyric !== lyric) {
      return
    }

    currentLyric.value = new Lyric(lyric, handleLyric)
    // 将歌词进行解析，并执行回调
    const hasLyric = currentLyric.value.lines.length
    if (hasLyric) {
      if (songReady.value) {
        playLyric()
      }
    } else {
      playingLyric.value = pureMusicLyric.value = lyric.replace(/\[(\d{2}):(\d{2}):(\d{2})\]/g, '')
    }
  })
  // watch(currentTime, (newCurrnttime) => {
  //   // await nextTick()
  //   // console.log(currentLyric.value.lines)
  //   // debugger
  //     const lines = currentLyric.value.lines
  //   for (let i = 0; i < lines.length; i++) {
  //     // console.log((newCurrnttime * 1000).toFixed(0), lines[i].time)
  //     if ((newCurrnttime * 1000).toFixed(0) >= lines[i].time && (newCurrnttime * 1000).toFixed(0) < lines[i + 1].time) {
  //       currentLineNum.value = i
  //       playingLyric.value = lines[i].txt
  //       const scrollComp = lyricScrollRef.value
  //       // 拿到歌词滚动scroll实例
  //       const listEl = lyricListRef.value
  //       // 拿到歌词实例
  //       if (!listEl) {
  //         return
  //       }
  //       // 如果歌词列表行号大于5
  //       if (i > 5) {
  //         // 拿到歌词对应的dom元素
  //         const lineEl = listEl.children[i - 5]
  //         scrollComp.scroll.scrollToElement(lineEl, 1000)
  //       } else {
  //         scrollComp.scroll.scrollTo(0, 0, 1000)
  //       }
  //     }
  //   }
  //   // console.log(currentSong.value.lyric)
  //   // console.log(currentTime.value);
  //   // console.log(currentLyric.value.tags)
  // })
  function playLyric() {
    const currentLyricVal = currentLyric.value
    if (currentLyricVal) {
      currentLyricVal.seek(currentTime.value * 1000)
    }
  }

  function stopLyric() {
    const currentLyricVal = currentLyric.value
    if (currentLyricVal) {
      currentLyricVal.stop()
    }
  }

  function handleLyric({ lineNum, txt }) {
    // 传入行号和文本
    currentLineNum.value = lineNum
    playingLyric.value = txt
    const scrollComp = lyricScrollRef.value
    // 拿到歌词滚动scroll实例
    const listEl = lyricListRef.value
    // 拿到歌词实例
    if (!listEl) {
      return
    }
    // 如果歌词列表行号大于5
    if (lineNum > 5) {
      // 拿到歌词对应的dom元素
      const lineEl = listEl.children[lineNum - 5]
      scrollComp.scroll.scrollToElement(lineEl, 1000)
    } else {
      scrollComp.scroll.scrollTo(0, 0, 1000)
    }
  }

  return {
    currentLyric,
    currentLineNum,
    pureMusicLyric,
    playingLyric,
    lyricScrollRef,
    lyricListRef,
    playLyric,
    stopLyric
  }
}

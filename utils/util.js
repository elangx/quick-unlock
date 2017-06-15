function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatCount(iCount) {
  var iMili = parseInt(iCount / 10) % 100 || 0
  var iSec = (parseInt(iCount / 1000) % 60) || 0
  var iMin = (parseInt(iCount / 1000 / 60) % 60) || 0
  iMili = iMili < 10 ? '0' + iMili : iMili
  iSec = iSec < 10 ? '0' + iSec : iSec
  iMin = iMin < 10 ? '0' + iMin : iMin
  return iMin + ':' + iSec + ':' + iMili
}

module.exports = {
  formatTime: formatTime,
  formatCount: formatCount
}

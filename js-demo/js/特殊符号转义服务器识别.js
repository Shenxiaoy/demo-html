function serverUrl(url) {
  var leg = /(#|%|&|\?|\+|\/|=| )/g
  var b = url.replace(leg, function (str) {
    var ary = [...arguments]
    return transform(str)
  })
  return b
}

function transform(str) {
  var control = {
    '#': '%23',
    '+': '%2B',
    ' ': '%20',
    '/': '%2F',
    '?': '%3F',
    '%': '%25',
    '&': '26',
    '=': '%3D'
  }

  for(var k in control) {
    if(str === k) {
      return control[k]
    }
  }
}

var a = 'shen xiaoyu'
console.log(serverUrl(a))



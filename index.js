// Add your functions and code here

function destructivelyAppendKitten(a){
  kittens.push(a)
  return kittens
}

function destructivelyPrependKitten(a){
  kittens.unshift(a)
  return kittens
}

function destructivelyRemoveLastKitten(a){
  kittens.pop(a)
  return kittens
}

function destructivelyRemoveFirstKitten(a){
  kittens.shift(a)
  return kittens
}

function appendKitten(a){
  var kitten3 = kittens.splice(kittens.length + 1, 0, a)
  return kitten3
}

function prependKitten(a){
  kittens.splice(0, 0, a)
  return kittens
}

function removeLastKitten(a){
  const kitten1 = kittens.slice(0, kittens.length - 1)
  return kitten1
}

function removeFirstKitten(a){
  const kitten2 = kittens.slice(1)
  return kitten2
}
function takeANumber(n, name) {
n.push(name)
  return `Welcome, ${name}. You are number ${n.length} in line.`
}

function nowServing(current) {
  if (current.length === 0) {
    return "There is nobody waiting to be served!"
    }
    else {


      return `Currently serving ${current.shift()}.`
    }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var string = "The line is currently: "
  for (var i = 0; i < line.length; i++) {
    string += (i + 1) + ". " + line[i];
    if (i != line.length - 1){
      string += ", ";
    }
  }
  return string
}

function takeANumber(line, name) {
  line.push(name) 
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.` 
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var status = "The line is currently:"
    for (i = 1; line.length > i; i++) {
      status = status + `${i}` + `${line[i]}`;
    }
    return status 
  }
}
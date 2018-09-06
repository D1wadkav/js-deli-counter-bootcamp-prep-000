function takeANumber(line, name) {
  line.push(name) 
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    console.log("There is nobody in lin")
  }
  return line.shift()
}

function currentLine(num) {
  return `The line is currently: `
}
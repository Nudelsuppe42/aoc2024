export default function day2(input: string) {
  const reports = input.split("\n").map((r) =>
    r
      .replace("\r", "")
      .split(" ")
      .map((e) => Number(e))
  );
  let saveCount = 0;

  for (const report of reports) {
    if (validate(report)||recursiveValidate(report)) saveCount++;
  }

  return saveCount + "";
}

function validate(report: number[]) {
  if (new Set(report).size != report.length) {
    return false;
  }

  if (!isDistanceOk(report)) {
    return false;
  }
  if (!(isIncreasing(report) || isDecreasing(report))) {
    return false;
  }
  return true;
}

function recursiveValidate(report: number[]) {
  let isValid = false;
  for(let i = 0; i<= report.length; i++) {
    if(validate([...report.slice(0,i),...report.slice(i+1)])) {
      isValid=true;
    }
    
  }
  return isValid
}

function isDecreasing(input: number[]) {
  for (let i = 1; i <= input.length; i++) {
    if (input[i] > input[i - 1]) {
      return false;
    }
  }
  return true;
}
function isIncreasing(input: number[]) {
  for (let i = 1; i <= input.length; i++) {
    if (input[i] < input[i - 1]) {
      return false;
    }
  }
  return true;
}
function isDistanceOk(input: number[]) {
  for (let i = 1; i <= input.length; i++) {
    if (Math.abs(input[i] - input[i - 1]) > 3) {
      return false;
    }
  }
  return true;
}

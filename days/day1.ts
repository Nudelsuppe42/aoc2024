export default function day1(input: string) {

    const array1 = input
      .split("\n")
      .map((e) => Number(e.split("   ")[0]))
      .sort((a, b) => a - b);
    const array2 = input
      .split("\n")
      .map((e) => Number(e.split("   ")[1]))
      .sort((a, b) => a - b);

    let distance = 0;

    for(const element in array1) {
        distance += Math.abs(array1[element] - array2[element])
    }

    return distance+""
}

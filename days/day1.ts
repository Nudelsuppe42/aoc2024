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

    let similarity = 0;

    for (const element in array1) {
        const count = array2.filter(e => e == array1[element]).length;

        similarity += count* array1[element]
    }

    return distance+"\n"+similarity
}

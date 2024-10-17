export class Kata {
    static disemvowel(str: string): string {
        return str.split("").filter(char => !"aeiouAEIOU".includes(char)).join("")
    }
  }
class Solution:
    publicDictionary = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ]
    def intToRoman(self, num: int) -> str:
        print(self.publicDictionary)
        romanString = ""
        index = 0
        while num > 0:
            if num - self.publicDictionary[index][0] >= 0:
                num -= self.publicDictionary[index][0]
                romanString += self.publicDictionary[index][1]
            else:
                index += 1
        return romanString
    

sol = Solution()
print(sol.intToRoman(3749))
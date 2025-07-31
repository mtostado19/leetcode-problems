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
        romanString = ""
        for intRoman, strRoman in self.publicDictionary:
            while num >= intRoman:
                num -= intRoman
                romanString += strRoman
        return romanString
    

sol = Solution()
print(sol.intToRoman(3749))
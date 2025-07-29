import math

class Solution:
    def reverse(self, x: int) -> int:
        n = abs(x)
        reversedNumString = "0"
        while n > 0:
            reversedNumString += str(n % 10)
            n = math.floor(n / 10)
        reversedNum = int(reversedNumString)
        # Validation only for instruction specification
        if reversedNum > 2147483647 or reversedNum < -2147483647:
            return 0
        if x < 0:
            return reversedNum * -1
        return reversedNum


x = 1534236469
sol = Solution()
print(sol.reverse(x))
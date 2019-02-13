#!/usr/bin/env checkio --domain=py run multicolored-lamp

# https://py.checkio.org/mission/multicolored-lamp/

# The New Year is coming and you've decided to decorate your home. But simple lights and Christmas decorations are so boring, so you have figured that you can use your programing skills and create something really cool and original.Your task is to create the class Lamp() and method light() which will make the lamp glow with one of the four colors in the sequence - (‘Green’, ‘Red’, ‘Blue’, ‘Yellow’). When the light() method is used for the first time, the color should be 'Green', the second time - 'Red' and so on.If the current color is 'Yellow', the next color should be 'Green' and so on.In this mission you can use theStatedesign pattern. It's highly useful in the situations where object should change its behaviour depending on the internal state.
# 
# Example:
# lamp_1 = Lamp()
# lamp_2 = Lamp()
# 
# lamp_1.light() #Green
# lamp_1.light() #Red
# lamp_2.light() #Green
#     
# lamp_1.light() == "Blue"
# lamp_1.light() == "Yellow"
# lamp_1.light() == "Green"
# lamp_2.light() == "Red"
# lamp_2.light() == "Blue"
# 
# 
# 
# Input:A few strings indicating the number of times the lamp is being turned on.
# 
# Output:The color of the lamp.
# 
# Precondition:4 colors: Green, Red, Blue, Yellow.
# 
# 
# END_DESC

class Lamp:
    pass

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing

    lamp_1 = Lamp()
    lamp_2 = Lamp()

    lamp_1.light() #Green
    lamp_1.light() #Red
    lamp_2.light() #Green
    
    assert lamp_1.light() == "Blue"
    assert lamp_1.light() == "Yellow"
    assert lamp_1.light() == "Green"
    assert lamp_2.light() == "Red"
    assert lamp_2.light() == "Blue"
    print("Coding complete? Let's try tests!")
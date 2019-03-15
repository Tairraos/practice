#!/usr/bin/env checkio --domain=py run the-warlords

# https://py.checkio.org/mission/the-warlords/

# 
# END_DESC

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    
	ronald = Warlord()
	heimdall = Knight()

	fight(heimdall, ronald) == False

	my_army = Army()
	my_army.add_units(Warlord, 1)
	my_army.add_units(Warrior, 2)
	my_army.add_units(Lancer, 2)
	my_army.add_units(Healer, 2)

	enemy_army = Army()
	enemy_army.add_units(Warlord, 3)
	enemy_army.add_units(Vampire, 1)
	enemy_army.add_units(Healer, 2)
	enemy_army.add_units(Knight, 2)

	my_army.move_units()
	enemy_army.move_units()

	type(my_army.units[0]) == Lancer
	type(my_army.units[1]) == Healer
	type(my_army.units[-1]) == Warlord

	type(enemy_army.units[0]) == Vampire
	type(enemy_army.units[-1]) == Warlord
	type(enemy_army.units[-2]) == Knight

	#6, not 8, because only 1 Warlord per army could be
	len(enemy_army.units) == 6

	battle = Battle()

	battle.fight(my_army, enemy_army) == True
    print("Coding complete? Let's try tests!")
#!/usr/bin/env checkio --domain=py run voice-tv-control

# https://py.checkio.org/mission/voice-tv-control/

# The technologies are rapidly evolving - only 50 years ago a simple black-and-white TV was a luxury! And now even a cool big color TV with remote control is a common thing. Let's try to improve our TV and add the voice control to it! To begin with, we’ll write the simple prototype in Python. It’ll use the following commands:
# 
# first_channel()- turns on the first channel from the list.
# last_channel()- turns on the last channel from the list.
# turn_channel(N)- turns on the N channel. Pay attention that the channel numbers start from 1, not from 0.
# next_channel()- turns on the next channel. If the current channel is the last one, turns on the first channel.
# previous_channel()- turns on the previous channel. If the current channel is the first one, turns on the last channel.
# current_channel()- returns the name of the current channel.
# is_exist(N/'name')- gets 1 argument - the number N or the string 'name' and returns "Yes", if the channel N or 'name' exists in the list, or "No" - in the other case.
# 
# The default channel turned on before all commands is №1.
# Your task is to create the VoiceCommand class and methods described above.
# In this mission you could use theIteratordesign pattern.
# 
# Example:
# CHANNELS = ["BBC", "Discovery", "TV1000"]
# 
# controller = VoiceCommand(CHANNELS)
# 
# controller.first_channel() == "BBC"
# controller.last_channel() == "TV1000"
# controller.turn_channel(1) == "BBC"
# controller.next_channel() == "Discovery"
# controller.previous_channel() == "BBC"
# controller.current_channel() == "BBC"
# controller.is_exist(4) == "No"
# controller.is_exist("BBC") == "Yes"
# 
# 
# 
# Input:The voice commands.
# 
# Output:The channel name or result of the is_exist method.
# 
# Precondition:All commands and channel names are correct.
# 
# 
# END_DESC

class VoiceCommand:
    pass


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing

    CHANNELS = ["BBC", "Discovery", "TV1000"]

    controller = VoiceCommand(CHANNELS)
    
    assert controller.first_channel() == "BBC"
    assert controller.last_channel() == "TV1000"
    assert controller.turn_channel(1) == "BBC"
    assert controller.next_channel() == "Discovery"
    assert controller.previous_channel() == "BBC"
    assert controller.current_channel() == "BBC"
    assert controller.is_exist(4) == "No"
    assert controller.is_exist("TV1000") == "Yes"
    print("Coding complete? Let's try tests!")
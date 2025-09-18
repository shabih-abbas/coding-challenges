"""
FCC Daily Challenge 18/09/2025
Problem: Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.
The returned value should be rounded to two decimal places in the format: "$d.dd".
"""

def cost_to_fill(tank_size, fuel_level, price_per_gallon):
    cost = str(round((tank_size - fuel_level) * price_per_gallon * 100))
    cost = '0' * (3 - len(cost)) + cost
    
    return '$' + cost[:-2] + '.' + cost[-2:]

if __name__ == "__main__":
    assert cost_to_fill(15, 9.5, 3.98) == "$21.89"
    assert cost_to_fill(12, 12, 4.99) == "$0.00"
    assert cost_to_fill(20, 19.99, 4.00) == "$0.04"

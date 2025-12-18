"""FreeCodeCamp Python Certification Lab # 2
Build a simple budget app that tracks spending in different categories
and can show the relative spending percentage on a graph.
"""

class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []
    
    def deposit(self, amount, description=''):
        self.ledger.append({
            'amount': amount,
            'description': description
        })
    
    def get_balance(self):
        if len(self.ledger) == 0:
            return 0
        return sum(list(map(lambda x: x['amount'], self.ledger)))
    
    def check_funds(self, amount):
        return False if amount > self.get_balance() else True
    
    def get_spend_amount(self):
        amount = 0
        for entry in self.ledger:
            if entry['amount'] < 0:
                amount = amount + entry['amount'] * -1
        return amount
    
    def withdraw(self, amount, description=''):
        if self.check_funds(amount):
            self.ledger.append({
                'amount': amount * -1,
                'description': description
            })
            return True
        
        return False
    
    def transfer(self, amount, Cat):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {Cat.name}")
            Cat.deposit(amount, f"Transfer from {self.name}")
            return True
        return False
    
    def __str__(self):
        string = "*" * ((30 - len(self.name)) // 2) + self.name
        string = string + "*" * (30-len(string))
        for entry in self.ledger:
            amount = str(round(entry['amount'] * 100))
            amount = amount[:-2] + '.' + amount[-2:]
            description = entry['description'][:23]
            string = string + '\n' + description + ' ' * (23 - len(description))
            string = string + ' ' * (7 - len(amount)) + amount[:7]
        string = string + '\n' + 'Total: ' + str(self.get_balance())
        return string

def create_spend_chart(categories):
    chart = "Percentage spent by category"
    total_spend = sum(list(map(lambda x: x.get_spend_amount(), categories)))
    spend_percent = list(map(lambda x: x.get_spend_amount() / total_spend * 100, categories))
    # y-axis and bars
    for i in range(100, -1, -10):
        row = str(i) + '|'
        row = ' ' * (4 - len(row)) + row
        for percent in spend_percent:
            row = row + (' o ' if percent >= i else ' ' * 3)
        chart = chart + '\n' + row + ' '
    chart = chart + '\n' + ' ' * 4 + '-' * (len(categories) * 3 + 1)
    labels = list(map(lambda x: ' ' * 5 + x + ' ', categories[0].name))
    # x-axis and category names
    for i in range(1, len(categories)):
        for c in range(0, len(categories[i].name)):
            char = categories[i].name[c] if c != 0 else categories[i].name[c].upper()
            if c < len(labels):
                labels[c] = labels[c] + ' ' + char + ' '
            else:
                new_row = ' ' * (4 + i * 3) + ' ' + char + ' '
                labels.append(new_row)
        for s in range(len(categories[i].name), len(labels)):
            labels[s]= labels[s] + ' ' * 3
    
    chart = chart + '\n' +' \n'.join(labels) + ' '
    return chart
    
food = Category('Food')
food.deposit(1000, 'deposit')
food.withdraw(10, 'groceries')
food.withdraw(10, 'restaurant and more food for dessert')

clothing = Category('Clothing')
clothing.deposit(1000, 'deposit')
clothing.withdraw(5, 'shirt')
clothing.withdraw(5, 'pant')

food.transfer(50, clothing)

entertainment = Category('Entertainment')
entertainment.deposit(1000, 'desposit')
entertainment.withdraw(8, 'burger')
entertainment.withdraw(4, 'drink')

print(food)

print(create_spend_chart([clothing, food, entertainment]))





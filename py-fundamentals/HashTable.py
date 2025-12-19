"""FreeCodeCamp Python Certification Lab # 4
Build a hash table from scratch. The hashing function will be the sum of the Unicode values of each character in the key.
"""
class HashTable:
    def __init__(self):
        self.collection = dict()
    
    def hash(self, key):
        code = 0
        for char in key:
            code = code + ord(char)
        return code
    
    def add(self, key, value):
        encoded = self.hash(key)
        if encoded in self.collection:
            self.collection[encoded][key] = value
        else:
            self.collection[encoded] = {key: value}
    
    def remove(self, key):
        encoded = self.hash(key)
        if encoded in self.collection:
            if len(self.collection[encoded].items()) > 1:
                del self.collection[encoded][key]
            else:
                del self.collection[encoded]
    
    def lookup(self, key):
        encoded = self.hash(key)
        if encoded in self.collection and key in self.collection[encoded]:
            return self.collection[encoded][key]
        return None
    
table = HashTable()
table.add('key', 'value')  
print(table.lookup('key')) # value
table.remove('key')
print(table.lookup('key')) # None

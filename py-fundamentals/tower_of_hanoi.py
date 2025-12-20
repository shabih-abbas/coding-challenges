"""FreeCodeCamp Python Certification Lab # 5
Solve the mathematical puzzle known as the Tower of Hanoi. The puzzle consists of three rods and a number of disks of different diameters.
The puzzle starts with the disks piled up on the first rod, in decreasing size, with the smallest disk on top and the largest disk on the bottom.

The goal of the Tower of Hanoi puzzle is moving all the disks to the last rod. To do that, you must follow three simple rules:
- You can move only top-most disks.
- You can move only one disk at a time.
- You cannot place larger disks on top of smaller ones.
The puzzle can be solved, following the given rules, in 2^n - 1 moves, where n is the total number of disks.
"""
def hanoi_solver(n):
    state = [[i for i in range(n, 0, -1)], [], []]
    moves = ' '.join(map(str, state))
    last_rod = n % 2 + 1
    last_rod_with_one = 0
    state[last_rod].append(state[0].pop())
    legal_move_exists = True

    while(legal_move_exists):
        legal_move_exists = False
        moves = moves + '\n' + ' '.join(map(str, state))
        
        for r in range(3):
            if (not legal_move_exists) and len(state[r]) != 0 and r != last_rod:
                next_rod = (r + 1) % 3
                far_rod = (r + 2) % 3    
            
                if state[r][-1] == 1:
                    last_rod = next_rod if next_rod != last_rod_with_one else far_rod
                    last_rod_with_one = r
                    state[last_rod].append(state[r].pop())
                    legal_move_exists = True

                elif len(state[next_rod]) == 0 or state[next_rod][-1] > state[r][-1]:
                    last_rod = next_rod
                    state[last_rod].append(state[r].pop())
                    legal_move_exists = True

                elif len(state[far_rod]) == 0 or state[far_rod][-1] > state[r][-1]:
                    last_rod = far_rod
                    state[last_rod].append(state[r].pop())
                    legal_move_exists = True

    return moves

# tests
if __name__ == "__main__":
    
    assert hanoi_solver(3) == "[3, 2, 1] [] []\n[3, 2] [] [1]\n[3] [2] [1]\n[3] [2, 1] []\n[] [2, 1] [3]\n[1] [2] [3]\n[1] [] [3, 2]\n[] [] [3, 2, 1]"
    assert hanoi_solver(5) == "[5, 4, 3, 2, 1] [] []\n[5, 4, 3, 2] [] [1]\n[5, 4, 3] [2] [1]\n[5, 4, 3] [2, 1] []\n[5, 4] [2, 1] [3]\n[5, 4, 1] [2] [3]\n[5, 4, 1] [] [3, 2]\n[5, 4] [] [3, 2, 1]\n[5] [4] [3, 2, 1]\n[5] [4, 1] [3, 2]\n[5, 2] [4, 1] [3]\n[5, 2, 1] [4] [3]\n[5, 2, 1] [4, 3] []\n[5, 2] [4, 3] [1]\n[5] [4, 3, 2] [1]\n[5] [4, 3, 2, 1] []\n[] [4, 3, 2, 1] [5]\n[1] [4, 3, 2] [5]\n[1] [4, 3] [5, 2]\n[] [4, 3] [5, 2, 1]\n[3] [4] [5, 2, 1]\n[3] [4, 1] [5, 2]\n[3, 2] [4, 1] [5]\n[3, 2, 1] [4] [5]\n[3, 2, 1] [] [5, 4]\n[3, 2] [] [5, 4, 1]\n[3] [2] [5, 4, 1]\n[3] [2, 1] [5, 4]\n[] [2, 1] [5, 4, 3]\n[1] [2] [5, 4, 3]\n[1] [] [5, 4, 3, 2]\n[] [] [5, 4, 3, 2, 1]"
    assert len(hanoi_solver(5).split('\n')) <= 2 ** 5 # initial position included









# 誰かに言われたのでピクロスを作った。
import random
def splitn(x, num=1):
    return(list(map(str, [x[i: i+int(num)] for i in range(0, len(x), int(num))])))
sq = int(input())
pic = [[random.randrange(0, 2) for c in range(sq)] for d in range(sq)]
hint_x = []
hint_y = []
for i in range(sq):
    l1_x = []
    l1_y = []
    vw_x = 0
    vw_y = 0
    for j in range(sq):
        if pic[i][j] == 1:
            if vw_y == 0:
                l1_y.append(1)
            elif vw_y == 1:
                l1_y[-1] += 1
        vw_y = pic[i][j]

        if pic[j][i] == 1:
            if vw_x == 0:
                l1_x.append(1)
            elif vw_x == 1:
                l1_x[-1] += 1
        vw_x = pic[j][i]
    hint_x.append(l1_x)
    hint_y.append(l1_y)

print("".join([chr(int(c)) for c in splitn("12479124861239812459124626528824038123631242565289", 5)]))
print(hint_x)
print()
print("".join([chr(int(c)) for c in splitn("12520124671239812459124626528819978123631242565289", 5)]))
print("\n".join([str(c) for c in hint_y]))
print()
print("".join(["\n" for c in range(17)]))
print("".join([chr(int(c)) for c in splitn("218393898812399199781239512354124271242412290", 5)]))
print("".join(["\n" for c in range(33)]))

for i in range(sq):
    for j in range(sq):
        if pic[i][j] == 1:
            pic[i][j] = chr(9632)
        elif pic[i][j] == 0:
            pic[i][j] = chr(9633)
print("\n".join([str(" ".join(c)) for c in pic]))

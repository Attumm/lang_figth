import random

def bub_sort(l):
	steps = 0
	for i in range(len(l)):
		for j in range(len(l)-(i+1)):
			steps += 1
			if l[j] < l[j+1]:
				l[j], l[j+1] = l[j+1], l[j]

	print('steps %d' % steps)

length = 10000
l = [random.randrange(10) for i in range(length)]
bub_sort(l)

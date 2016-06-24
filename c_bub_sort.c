#include <time.h>
#include <stdlib.h>
#include <stdio.h>

const LENGTH = 50000;



void bub_sort(int arr[]) {
	int steps = 0;
	int iter;
	int jiter;
	for( iter=0; iter<LENGTH; iter++) {
		for(jiter=0; jiter<LENGTH-(iter+1); jiter++) {
			steps += 1;
			if (arr[jiter] > arr[jiter+1]) {
				int temp = arr[jiter];
				arr[jiter] = arr[jiter+1];
				arr[jiter+1] = temp;
			}
		}
	}
	printf("steps %d\n", steps);
}

int main() {
	int arr[LENGTH];
	int iter;

	srand(time(NULL));
	for (iter=0; iter<LENGTH; iter++) {
		arr[iter] = rand();
	}
	printf("array length %d\n", LENGTH);
	bub_sort(arr);
}



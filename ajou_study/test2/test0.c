#include<stdio.h>

int main(){
	int b=5;
	int *p;
	printf("non pointer=%ld\n",sizeof(b));
	printf("pointer=%ld\n",sizeof(p));

	return 0;
}


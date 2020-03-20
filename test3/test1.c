#include<stdio.h>
#define PTES_PER_PAGE_SHIFT 4
#define NR_PTES_PER_PAGE    (1 << PTES_PER_PAGE_SHIFT)

int main(){
	printf("%d\n",PTES_PER_PAGE_SHIFT);
	printf("%d\n",NR_PTES_PER_PAGE);
}


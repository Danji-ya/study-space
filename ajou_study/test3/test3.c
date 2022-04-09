#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<stdbool.h>

#define PTES_PER_PAGE_SHIFT 4
#define NR_PTES_PER_PAGE (1<<PTES_PER_PAGE_SHIFT)


struct pte {
	bool valid;
	bool writable;		
	unsigned int pfn;
};

struct pte_directory {
	struct pte ptes[NR_PTES_PER_PAGE];
};

struct pagetable {
	struct pte_directory *outer_ptes[NR_PTES_PER_PAGE];
};

struct process {
	unsigned int pid;
	struct pagetable pagetable;
	//struct list_head list;
};

static struct process init={
	.pid=1004,
};

struct process *current =&init;

unsigned int alloc_page(void)
{
	static unsigned int __nr_allocated_pages = 1;
	return __nr_allocated_pages++;
}

int main(){
	bzero(&init.pagetable, sizeof(struct pagetable));
	printf("%d\n",current->pid);
	struct pte_directory p1={0,};
	current->pagetable.outer_ptes[0]=&p1;
	

	printf("%p\n",&p1.ptes[0]);
	struct pte_directory *pd = current->pagetable.outer_ptes[0];
	printf("%p\n",&pd->ptes[0]);
	//printf("%p\n",&pd);
	for (int j = 0; j < NR_PTES_PER_PAGE; j++) {
		struct pte *pte = &pd->ptes[j];
		
		fprintf(stderr, "%02d:%02d %c%c | %-3d\n", 0, j,
																	pte->valid ? 'v' : ' ',	pte->writable ? 'w' : ' ',pte->pfn);	
	}

	for (int j = 0; j < NR_PTES_PER_PAGE; j++) {
		
		fprintf(stderr, "%02d:%02d %c%c | %-3d\n", 0, j,
																	current->pagetable.outer_ptes[0]->ptes[j].valid ? 'v' : ' ',	current->pagetable.outer_ptes[0]->ptes[j].writable ? 'w' : ' ',current->pagetable.outer_ptes[0]->ptes[j].pfn);	
	}
}

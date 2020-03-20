#include<stdio.h>
#include<stdlib.h>
#include<string.h>

struct list_head{
	struct list_head *next,*prev;
};
struct process{
	int a;
	int b;
};



struct resource {
		/**
		 * 	 * The owner process of this resource. NULL implies the resource is free
		 * 	 	 * whereas non-NULL implies @owner process owns this resource
		 * 	 	 	 */
		int a;

			/**
			 * 	 * list head to list processes that are wanting for the resource
			 * 	 	 *	
			 */ 	 	
	       	struct list_head waitqueue;
		struct process *owner;
};

int main(){
	struct process my;
	my.a=10;
	my.b=5;
	struct process *myy=&my;
	struct resource *abc=malloc(sizeof(struct resource));
	abc->owner=myy;
	printf("%d\n",abc->owner->a);
	/*
	struct resource resources[32];
	//printf("%ld\n",sizeof(struct list_head));
	//printf("%ld\n",sizeof(resources[0]));
	printf("resource의 주소는 %p \n",&resources[0]);
	printf("ㄷㅇ위와 동일 %p \n",&resources);
	//printf("%d\n",&resources[0].a);
	printf("%p\n",&resources->waitqueue);

	struct resource *r = resources + 1;
	printf("%p\n",resources);
	printf("%p\n",resources+1);
	printf("%p\n",resources+2);
	printf("resource *r= %p\n",r);
	*/
}



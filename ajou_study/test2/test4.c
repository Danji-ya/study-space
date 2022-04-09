#include<stdio.h>
#include<stdlib.h>


#define offsetof(TYPE, MEMBER) ((size_t) &((TYPE *)0)->MEMBER)



struct list_head{
	struct list_head *next,*prev;
};

struct abc{
	int a;
	int b;
	int c;
};

int main(){
	printf("%ld\n",sizeof(struct list_head));
	struct abc p1;
	printf("struct abc size = %ld\n",sizeof(struct abc));
	p1.a=5;
	printf("p1 size = %ld\n",sizeof(p1));
	struct abc *p2;
	printf("struct *p2 size = %ld\n",sizeof(p2));



	 struct s {
	         int i;	
		 char c;
		 double d;
	         char a[];
         };
	 //printf("%p\n",struct s.i);
	 printf("%d\n",((struct s*)0));

	     /* 컴파일러에 따라 출력이 다름 */
   printf("offsets: i=%zd; c=%zd; d=%zd a=%zd\n",offsetof(struct s, i), offsetof(struct s, c),
		  					 offsetof(struct s, d), offsetof(struct s, a));
	         printf("sizeof(struct s)=%zd\n", sizeof(struct s));

		     exit(EXIT_SUCCESS);


}
	

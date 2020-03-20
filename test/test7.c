#include <unistd.h>
#include<stdlib.h>
#include <stdio.h>
#define PATH_MAX 256 
int main(int argc, char *argv[])
{
	char name[PATH_MAX];
	/*
	if(argc != 2){
	     fprintf(stderr, "Usage: %s <path name>\n", argv[0]);
	     return 1;
	}
	
	printf("Before Current Directory:%s\n",getcwd(name,PATH_MAX));
	if(chdir(argv[1])==-1){
        	printf("failed, change directory\n");
	}
	else{	
		printf("After Current Directory:%s\n",getcwd(name,PATH_MAX));
	}
	*/
	
	chdir(getenv("HOME"));
	printf("%s\n",getcwd(name,PATH_MAX));
	return 0;
}

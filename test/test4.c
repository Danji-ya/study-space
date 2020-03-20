#include<stdio.h>
#include<unistd.h>
#include<wait.h>

int main(){

	pid_t pid;
	printf("start\n");
	int status;

	pid=fork();

	if(pid==0){//child
		pid=fork();

		if(pid==0){
			printf("child의 child pid:%d \n",getpid());
		}
		else{
			printf("child pid:%d\n",getpid());
			printf("chld process's child pid:%d\n",pid);
		}
	}

	else{
		printf("parent process pid:%d\n ",getpid());
		printf("my child pid: %d\n",pid);
		waitpid(pid,&status,0);

	}
}



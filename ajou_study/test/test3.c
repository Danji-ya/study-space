#include<stdio.h>
#include<sys/types.h>
#include<stdlib.h>
#include<unistd.h>
#include<wait.h>
#include<signal.h>


int __timeout=5;
int count=1;
pid_t pid;

void myhandler(int sig){
	printf("time over\n");
	kill(pid,SIGTERM);
	
}


int main(){

	
	int status;

	pid=fork();

	if(pid==0){

		printf("i'm child process%d \n",getpid());
		printf("waiting for %d\n",__timeout);
		sleep(10);
		//alarm(__timeout);
		while(count<11){
			printf("child count %d\n",count++);
			sleep(1);
		}
	}
	else{
		printf("I'm parent process%d \n",getpid());
		
		struct sigaction act;
		act.sa_handler=myhandler;
		sigemptyset(&act.sa_mask);
		act.sa_flags=0;
		sigaction(SIGALRM,&act,0);
		alarm(__timeout);

		int ret=waitpid(pid,&status,0);


		if(ret==-1){
			printf("fail\n");
		}
		else{
			printf("%d is terminated\n",pid);
		}


		while(count<3){
			printf("parent count%d\n",count++);
			sleep(1);
		}
	}
}
